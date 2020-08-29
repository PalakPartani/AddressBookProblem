"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBookException = void 0;
class AddressBookException extends Error {
    constructor(message) {
        super(message);
        this.getExceptionMessage = (message) => {
            return message;
        };
        this.name = "getExceptionMessage";
    }
}
exports.AddressBookException = AddressBookException;
//# sourceMappingURL=AddressBookException.js.map