function collide(some, somr) {

  if (some.x - somr.x < (some.width + somr.width) / 2) {
    return true;
  }

  else {
    return false;
  }

}
