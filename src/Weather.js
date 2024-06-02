import React from "react";
import "./Weather.css"

 export default function Weather (){
    return (
       <div className ="Weather">
        <form>
            <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city.." className="form-control" /></div>
            <div className="col-3"><input type="submit" value="Search" className="btn btn-primary" /></div>
            </div>
        </form>
        <h1>Kyiv</h1>
        <ul>
            <li>Sunday 18:00</li>
            <li>Rainy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAepJREFUaN7tmd2thCAQhSnBEijBEmjgJpZgCZZgCZZgCXZwLcFX3yiBDlhIhhvC5dcdFzeB5LzsTtjz4cwwZomUknyzSANoAA2gATQANICSdZ4nA/Wk0ioGUGY7pVVJKElLXGl6NIAySMGojGh9MsCRMG80Pw5AmRozzRvppzVoGNCk068mwFYI4JPArpMSgB0BwGj5doAVutnsdDNdYwwVAH5o8rTNqzoyGsKIAqAvKETjRkNGQxC5BR8EuMm8vJCO0cKPAXBs83DyXcF9YmvKBoDHfIf5/o2DESUAM7L5HU6eez4fraFwzEwvYQo9BLDfcPrM2dek02jd1vZnOfuyEMCKaH52OwqMGaF04vBdDsQaApgQT546Jy9g/1gtcHgSqUxYQgD0xrwvgR9gn5D6WBtdEC6s6e55KQbQWd3hijqECVakxoq33okzXj03pFpiNQCOT4zfSYCf35MprUpHaBMrhltzlKwOoAx1SkJJgnqPeR3DrRhmXYZY6q8CLJaxP3NOzOzEjOSDKwigT9sxtnvM01RMTYDdMUc9AG5M/wgAnQaOsdljfnBiFlJh/QPwFK4u0C5RuMKNqQngFu7wtMJNAYhUUebE1ATYYoULAFvNwk0BmFuVZty8lFRe7S+mBtAAGkADeFsvKpKWeAy6FowAAAAASUVORK5CYII=" alt="Rainy"></img>
            18 °C
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: 80%</li>
                    <li>Wind: 5km/h</li>
                </ul>
            </div>
        </div>

       </div> 
    )
 }