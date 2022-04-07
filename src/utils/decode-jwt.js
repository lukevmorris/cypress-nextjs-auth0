// Heavily inspired by the jose decodeJwt function:
// https://github.com/panva/jose/blob/main/src/util/decode_jwt.ts

export function decodeJwt(jwt) {
  const { 1: payload } = jwt.split('.');
  const munged = payload
    .replace(/-/g, '+')
    .replace(/_/g, '/')
    .replace(/\s/g, '');
  const { aud, exp, iat, iss, ...claims } = JSON.parse(atob(munged));
  return claims;
}
