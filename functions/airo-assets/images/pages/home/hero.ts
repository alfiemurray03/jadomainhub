const HERO_IMAGE_URL = 'https://img1.wsimg.com/isteam/getty/1456147420';

export const onRequestGet = async (): Promise<Response> => {
  return Response.redirect(HERO_IMAGE_URL, 302);
};
