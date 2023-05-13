//If we surely know a type of a variable but typescript doesnt know or automitically infur as unknown or any then we can use as keyword to confirm the type

import { IFriends } from "./interfaces";

const fetchData: unknown = { name: 's' };

const fetchDataName = (fetchData as IFriends).name;

export { fetchDataName };