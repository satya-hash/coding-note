import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const url = "/api/all";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function getAllPosts(limit: number, page: number, type?: string) {
    let res = await axios.get(`${url}?limit=${limit}&page=${page}&type=${type}`);
    return res.data;
}
export async function getSpecificPosts(type?: string) {
    let res = await axios.get(`${url}?&type=${type}`);
    return res.data;
}

export async function getProblem(slug: string) {
    let searchQuery = `${url}/leetcode/${slug}`;
    let res = await axios.get(searchQuery);
    return res.data;
}
export async function getSearchResults(query: string) {
    let searchQuery = `${url}/search?query=${query}`;
    let res = await axios.get(searchQuery);
    return res.data;
}

export async function getProblemsByDifficulty(limit: number, page: number, type?: string, difficulty?: string) {
    let res = await axios.get(`${url}/difficulty?limit=${limit}&page=${page}&type=${type}&difficulty=${difficulty}`);
    return res.data;
}
