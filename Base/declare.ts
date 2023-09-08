import { Component } from "./component";
import { Service } from "./service";

export type Declare = {
  [key: string]: Component;
};

export type Provider = {
  [key: string]: Service[];
}