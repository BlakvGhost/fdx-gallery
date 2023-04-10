import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe';

export interface IPhotoSwipe extends PhotoSwipe {
  prototype: PhotoSwipe;
}

export const PhotoSwipeC: typeof PhotoSwipe = PhotoSwipe;

export const PhotoSwipeUIDefault: typeof PhotoSwipeUI_Default = PhotoSwipeUI_Default;
