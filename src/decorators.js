import { Relation } from './Relation'
import { BelongsToRelation } from './Relation/BelongsTo'
import { HasManyRelation } from './Relation/HasMany'
import { HasOneRelation } from './Relation/HasOne'

export { belongsToType, hasManyType, hasOneType } from './Relation'

/**
 * TODO
 *
 * @name module:js-data.belongsTo
 * @method
 * @param {Mapper} related The relation the target belongs to.
 * @param {Object} opts Configuration options.
 * @param {string} opts.foreignKey The field that holds the primary key of the
 * related record.
 * @param {string} opts.localField The field that holds a reference to the
 * related record object.
 * @returns {Function} Invocation function, which accepts the target as the only
 * parameter.
 */
export const belongsTo = function (related, opts) {
  return function (mapper) {
    Relation.create(BelongsToRelation, related, opts).assignTo(mapper)
  }
}

/**
 * TODO
 *
 * @name module:js-data.hasMany
 * @method
 * @param {Mapper} related The relation of which the target has many.
 * @param {Object} opts Configuration options.
 * @param {string} [opts.foreignKey] The field that holds the primary key of the
 * related record.
 * @param {string} opts.localField The field that holds a reference to the
 * related record object.
 * @returns {Function} Invocation function, which accepts the target as the only
 * parameter.
 */
export const hasMany = function (related, opts) {
  return function (mapper) {
    Relation.create(HasManyRelation, related, opts).assignTo(mapper)
  }
}

/**
 * TODO
 *
 * @name module:js-data.hasOne
 * @method
 * @param {Mapper} related The relation of which the target has one.
 * @param {Object} opts Configuration options.
 * @param {string} [opts.foreignKey] The field that holds the primary key of the
 * related record.
 * @param {string} opts.localField The field that holds a reference to the
 * related record object.
 * @returns {Function} Invocation function, which accepts the target as the only
 * parameter.
 */
export const hasOne = function (related, opts) {
  return function (mapper) {
    Relation.create(HasOneRelation, related, opts).assignTo(mapper)
  }
}
