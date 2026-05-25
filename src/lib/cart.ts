// ── Types ────────────────────────────────────────────────
export interface CartItem {
  id:       number;
  name:     string;
  category: string;
  color:    string;
  size:     string;
  price:    number;
  qty:      number;
  image:    string;
}

const CART_KEY = 'the-void-cart';

// ── Read ─────────────────────────────────────────────────
export function getCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) ?? '[]');
  } catch {
    return [];
  }
}

// ── Write ────────────────────────────────────────────────
function saveCart(cart: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }));
}

// ── Add ──────────────────────────────────────────────────
export function addToCart(item: Omit<CartItem, 'qty'>): void {
  const cart    = getCart();
  const existing = cart.find(i => i.id === item.id && i.color === item.color && i.size === item.size);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  saveCart(cart);
}

// ── Update qty ───────────────────────────────────────────
export function updateQty(id: number, color: string, size: string, delta: number): void {
  const cart = getCart();
  const item = cart.find(i => i.id === id && i.color === color && i.size === size);

  if (!item) return;

  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
}

// ── Remove ───────────────────────────────────────────────
export function removeFromCart(id: number, color: string, size: string): void {
  const cart = getCart().filter(i => !(i.id === id && i.color === color && i.size === size));
  saveCart(cart);
}

// ── Total count ──────────────────────────────────────────
export function getCartCount(): number {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

// ── Totals ───────────────────────────────────────────────
export function getCartTotals() {
  const subtotal = getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping  = subtotal === 0 ? 0 : subtotal >= 200 ? 0 : 15;
  const total     = subtotal + shipping;
  return { subtotal, shipping, total };
}
