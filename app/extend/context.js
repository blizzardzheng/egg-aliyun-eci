'use strict';

module.exports = {
  /**
   * Eci Singleton instance
   * @member Context#Eci
   * @since 1.0.0
   * @see App#oss
   */
  get eci() {
    console.log(this.app, this.app.aliyunEci);
    return this.app.aliyunEci;
  },
};
