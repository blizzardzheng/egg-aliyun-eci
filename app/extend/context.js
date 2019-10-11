'use strict';

module.exports = {
  /**
   * Eci Singleton instance
   * @member Context#Eci
   * @since 1.0.0
   * @see App#oss
   */
  get eci() {
    return this.app.aliyunEci;
  },
};
