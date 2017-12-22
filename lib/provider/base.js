/**
 * MIT License
 * 
 * Copyright (c) 2016 - 2017 RDUK <tech@rduk.fr>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

var Base = require('@rduk/provider/lib/base');
var errors = require('@rduk/errors');

var LoggerBaseProvider = function LoggerBaseProvider(config, section) {
    LoggerBaseProvider.super_.apply(this, Array.prototype.slice.call(arguments, 0));
};

require('util').inherits(LoggerBaseProvider, Base);

LoggerBaseProvider.prototype.initialize = function() {};

LoggerBaseProvider.prototype.error = function() {
    errors.throwNotImplementedError('error');
};

LoggerBaseProvider.prototype.warn = function() {
    errors.throwNotImplementedError('warn');
};

LoggerBaseProvider.prototype.info = function() {
    errors.throwNotImplementedError('info');
};

LoggerBaseProvider.prototype.verbose = function() {
    errors.throwNotImplementedError('verbose');
};

LoggerBaseProvider.prototype.debug = function() {
    errors.throwNotImplementedError('debug');
};

module.exports = LoggerBaseProvider;
