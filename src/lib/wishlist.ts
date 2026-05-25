export interface WishlistItem {
  id:       number;
  name:     string;
  category: string;
  price:    number;
}

const WISHLIST_KEY = 'the-void-wishlist';

export function getWishlist(): WishlistItem[] {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function saveWishlist(list: WishlistItem[]): void {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  window.dispatchEvent(new CustomEvent('wishlist:updated', { detail: list }));
}

export function toggleWishlist(item: WishlistItem): boolean {
  const list    = getWishlist();
  const idx     = list.findIndex(i => i.id === item.id);
  const added   = idx === -1;
  if (added) list.push(item);
  else list.splice(idx, 1);
  saveWishlist(list);
  return added;
}

export function isWishlisted(id: number): boolean {
  return getWishlist().some(i => i.id === id);
}

export function getWishlistCount(): number {
  return getWishlist().length;
}
