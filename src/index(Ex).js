/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {}

/**
 * Both of these will link to the bar function.
 * @see {@link bar}
 * @see bar
 */
function foo() {}

// Use the inline {@link} tag to include a link within a free-form description.
/**
 * @see {@link foo} for further information.
 * @see {@link http://github.com|GitHub}
 */
function bar() {}

/**
 * Generic dairy product.
 * @constructor
 */
function DairyProduct() {}

/**
 * Check whether the dairy product is solid at room temperature.
 * @abstract
 * @return {boolean}
 */
DairyProduct.prototype.isSolid = function () {
	throw new Error('must be implemented by subclass!');
};

/**
 * Cool, refreshing milk.
 * @constructor
 * @augments DairyProduct
 */
function Milk() {}

/**
 * Check whether milk is solid at room temperature.
 * @param {PostSearch} todo
 * @return {boolean} Always returns false.
 */
Milk.prototype.isSolid = function (todo) {
	return false;
};

/**
 * 게시물 검색 정보를 담는 객체
 * @typedef {object} PostSearch
 * @property {number} page 0이 1페이지임.
 * @property {number} perpage
 * @property {Date} date_gte
 * @property {Date} date_lte
 * @property {string} search
 * @property {string[]} board_permalinks
 * @property {string} board_belongs_to
 */
