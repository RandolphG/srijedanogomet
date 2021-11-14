/**
 * Vec2
 * @classdesc 2D vector
 */
export class Vec2 {
  x: any;
  y: any;
  pool: any[];

  constructor(x?: any, y?: any) {
    /* let x =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let y =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;*/
    this.x = x;
    this.y = y;
    this.pool = [];
  }

  get lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }

  get length() {
    return Math.sqrt(this.lengthSquared);
  }

  set length(value: any) {
    let a = this.angle;
    this.x = Math.cos(a) * value;
    this.y = Math.sin(a) * value;
  }

  get angle() {
    return Math.atan2(this.y, this.x);
  }

  set angle(value: any) {
    let l = this.length;
    this.x = Math.cos(value) * l;
    this.y = Math.sin(value) * l;
  }

  add = (vec: any) => {
    this.x = this.x + vec.x;
    this.y = this.y + vec.y;
    return this;
  };

  subtract = (vec: any) => {
    this.x = this.x - vec.x;
    this.y = this.y - vec.y;
    return this;
  };

  multiply = (vec: any) => {
    this.x = this.x * vec.x;
    this.y = this.y * vec.y;
    return this;
  };

  normalize = () => {
    let lsq: any = this.lengthSquared;
    if (lsq === 0) {
      this.x = 1;
      return this;
    }
    if (lsq === 1) {
      return this;
    }
    let l = Math.sqrt(lsq);
    this.x /= l;
    this.y /= l;
    return this;
  };

  isNormalized = () => {
    return this.lengthSquared === 1;
  };

  truncate = (max: any) => {
    // if (this.length > max) {
    if (this.lengthSquared > max * max) {
      this.length = max;
    }
    return this;
  };

  scaleBy = (mul: any) => {
    this.x *= mul;
    this.y *= mul;
    return this;
  };

  divideBy = (div: any) => {
    this.x /= div;
    this.y /= div;
    return this;
  };

  equals = (vec: any) => {
    return this.x === vec.x && this.y === vec.y;
  };

  negate = () => {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  };

  dotProduct = (vec: any) => {
    /*
        If A and B are perpendicular (at 90 degrees to each other), the result
        of the dot product will be zero, because cos(Θ) will be zero.
        If the angle between A and B are less than 90 degrees, the dot product
        will be positive (greater than zero), as cos(Θ) will be positive, and
        the vector lengths are always positive values.
        If the angle between A and B are greater than 90 degrees, the dot
        product will be negative (less than zero), as cos(Θ) will be negative,
        and the vector lengths are always positive values
        */
    return this.x * vec.x + this.y * vec.y;
  };

  crossProduct = (vec: any) => {
    /*
        The sign tells us if vec to the left (-) or the right (+) of this vec
        */
    return this.x * vec.y - this.y * vec.x;
  };

  distanceSq = (vec: any) => {
    let dx = vec.x - this.x;
    let dy = vec.y - this.y;
    return dx * dx + dy * dy;
  };

  distance = (vec: any) => {
    return Math.sqrt(this.distanceSq(vec));
  };

  clone = () => {
    return this.get(this.x, this.y);
  };

  reset = () => {
    this.x = 0;
    this.y = 0;
    return this;
  };

  /* copy vector to local x & y */
  copy = (vec: any) => {
    this.x = vec.x;
    this.y = vec.y;
    return this;
  };

  perpendicular = () => {
    return this.get(-this.y, this.x);
  };

  sign = (vec: any) => {
    // Determines if a given vector is to the right or left of this vector.
    // If to the left, returns -1. If to the right, +1.
    let p = this.perpendicular();
    let s = p.dotProduct(vec) < 0 ? -1 : 1;
    p.dispose();
    return s;
  };

  set = (angle: any, length: any) => {
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
    return this;
  };

  dispose = () => {
    this.x = 0;
    this.y = 0;
    this.pool.push(this);
  };

  get = (x: any, y: any) => {
    let v = this.pool.length > 0 ? this.pool.pop() : new Vec2();
    v.x = x || 0;
    v.y = y || 0;
    return v;
  };

  fill = (n: any) => {
    while (this.pool.length < n) {
      this.pool.push(new Vec2());
    }
  };

  angleBetween = (a: any, b: any) => {
    if (!a.isNormalized()) {
      a = a.clone().normalize();
    }
    if (!b.isNormalized()) {
      b = b.clone().normalize();
    }
    return Math.acos(a.dotProduct(b));
  };
}
