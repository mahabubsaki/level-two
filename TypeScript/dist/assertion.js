"use strict";
//If we surely know a type of a variable but typescript doesnt know or automitically infur as unknown or any then we can use as keyword to confirm the type
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataName = void 0;
const fetchData = { name: 's' };
const fetchDataName = fetchData.name;
exports.fetchDataName = fetchDataName;
