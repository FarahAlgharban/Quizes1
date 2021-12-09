// function addProduct

const express=require("express");

const product =require("./product")


async function addProduct(req, res) {
    try {
      const product = { name: req.body.name, password: Password };
      res.status(201).send();
    } catch {
      res.status(500).send();
    }
  }
