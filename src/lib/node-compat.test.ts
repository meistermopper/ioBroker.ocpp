import { expect } from 'chai';
import util from 'util';
import './node-compat';

describe('node-compat polyfill', () => {
    const anyUtil = util as any;

    it('should provide isObject', () => {
        expect(typeof anyUtil.isObject).to.equal('function');
        expect(anyUtil.isObject({})).to.be.true;
        expect(anyUtil.isObject({ a: 1 })).to.be.true;
        expect(anyUtil.isObject(null)).to.be.false;
        expect(anyUtil.isObject('string')).to.be.false;
        expect(anyUtil.isObject(123)).to.be.false;
        expect(anyUtil.isObject(undefined)).to.be.false;
    });

    it('should provide isArray', () => {
        expect(typeof anyUtil.isArray).to.equal('function');
        expect(anyUtil.isArray([])).to.be.true;
        expect(anyUtil.isArray({})).to.be.false;
    });

    it('should provide isBoolean', () => {
        expect(typeof anyUtil.isBoolean).to.equal('function');
        expect(anyUtil.isBoolean(true)).to.be.true;
        expect(anyUtil.isBoolean(false)).to.be.true;
        expect(anyUtil.isBoolean(0)).to.be.false;
    });

    it('should provide isNumber', () => {
        expect(typeof anyUtil.isNumber).to.equal('function');
        expect(anyUtil.isNumber(42)).to.be.true;
        expect(anyUtil.isNumber('42')).to.be.false;
    });

    it('should provide isString', () => {
        expect(typeof anyUtil.isString).to.equal('function');
        expect(anyUtil.isString('test')).to.be.true;
        expect(anyUtil.isString(123)).to.be.false;
    });

    it('should provide isUndefined', () => {
        expect(typeof anyUtil.isUndefined).to.equal('function');
        expect(anyUtil.isUndefined(undefined)).to.be.true;
        expect(anyUtil.isUndefined(null)).to.be.false;
        expect(anyUtil.isUndefined('')).to.be.false;
    });

    it('should provide isNull and isNullOrUndefined', () => {
        expect(typeof anyUtil.isNull).to.equal('function');
        expect(anyUtil.isNull(null)).to.be.true;
        expect(anyUtil.isNull(undefined)).to.be.false;

        expect(typeof anyUtil.isNullOrUndefined).to.equal('function');
        expect(anyUtil.isNullOrUndefined(null)).to.be.true;
        expect(anyUtil.isNullOrUndefined(undefined)).to.be.true;
        expect(anyUtil.isNullOrUndefined(0)).to.be.false;
    });

    it('should provide isFunction, isSymbol, isRegExp, isDate, isError, isBuffer', () => {
        expect(
            anyUtil.isFunction(() => {
                return 1;
            })
        ).to.be.true;
        expect(anyUtil.isSymbol(Symbol('test'))).to.be.true;
        expect(anyUtil.isRegExp(/test/)).to.be.true;
        expect(anyUtil.isDate(new Date())).to.be.true;
        expect(anyUtil.isError(new Error('test'))).to.be.true;
        expect(anyUtil.isBuffer(Buffer.from('test'))).to.be.true;
    });
});
