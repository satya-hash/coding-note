import axios from "axios"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
const url='/api/all'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getAllPosts(){
  let res = await axios.get(url);
  return res.data;
}
export async function getSpecificPosts(type:string){
  let query = '';
  if(type==='problem') query='leetcode';
  else query='blog';
  let res=await axios.get(`${url}/${query}`)
  return res.data
}

export async function getProblem(slug:string) {
  let searchParams=new URLSearchParams();
  searchParams.append('id',slug);
  let searchQuery = `${url}/leetcode?${searchParams}`;
  let res = await axios.get(searchQuery);
  return res.data;
}