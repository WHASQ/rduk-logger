# RDUK - Logger

[![Greenkeeper badge](https://badges.greenkeeper.io/rd-uk/rduk-logger.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/rd-uk/rduk-logger.svg?branch=master)](https://travis-ci.org/rd-uk/rduk-logger)
[![Coverage Status](https://coveralls.io/repos/github/rd-uk/rduk-logger/badge.svg?branch=master)](https://coveralls.io/github/rd-uk/rduk-logger?branch=master)
[![bitHound Overall Score](https://www.bithound.io/github/rd-uk/rduk-logger/badges/score.svg)](https://www.bithound.io/github/rd-uk/rduk-logger)

__Warning__: This module cannot be used alone. See implementations below.

## Implementations

- [winston](https://www.npmjs.com/package/@rduk/logger-winston-provider)

# Example

## Winston

### Installation

```sh
npm i --save-exact --save @rduk/logger @rduk/logger-winston-provider
```

### Configuration

```yaml
# config.yml
---
logger:
    default: winston
    providers:
        -
            name: winston
            type: '@rduk/logger-winston-provider'
            level: debug
            transports:
                console: true
```

## Usage

```js
const logger = require('@rduk/logger');

logger.error('error'); 
logger.warn('warn'); 
logger.info('info'); 
logger.verbose('verbose'); 
logger.debug('debug'); 
```
