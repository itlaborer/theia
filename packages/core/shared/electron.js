module.exports = undefined;
try {
    module.exports = require('@theia/electron');
} catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
        console.warn('@theia/electron not found');
    } else {
        throw error;
    }
}
