/**
 * MIT License
 * 
 * Copyright (c) 2017 RDUK <tech@rduk.fr>
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

const configuration = require('@rduk/configuration');
const provider = require('./provider');
const LoggerSection = require('./configuration/loggerSection');

function Logger() {
    let section;
    Object.defineProperty(this, 'section', {
        get: function() {
            if (!section) {
                section = configuration.load().getSection('logger', require('./configuration/loggerSection'), true);
                
                if (!section) {
                    section = new LoggerSection({'default': 'default', providers:[]});
                }
            }

            return section;
        }
    });
}

['error', 'warn', 'info', 'verbose', 'debug'].forEach(function(method) {
    Logger.prototype[method] = function() {
        let args = Array.prototype.slice.call(arguments, 0);

        this.section.enabledProviders.forEach(function(name) {
            let instance = provider.get(name);
            instance[method].apply(instance, args);
        });
    };
});

module.exports = new Logger();