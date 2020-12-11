import React from 'react'
import './Ex3.css'

function Ex3() {
    return (
        <div>
            <h1>Flex-like grids</h1>
            <p className="header">Ever wanted to set flexbox to space-(something) and got awful last row layouts, ? Here's an alternative approach using CSS Grid</p>
            <p className="instruction">Resize the frame width to check the how elements grows, shrinks and wraps</p>
            <h2>Growing / Shrinking width elements</h2>
            <p>Using auto-fit minmax();</p>
            <div className="grid">
                <div>
                    <h1>1</h1>
                </div>
                <div>
                    <h1>2</h1>
                </div>
                <div>
                    <h1>3</h1>
                </div>
                <div>
                    <h1>4</h1>
                </div>
                <div>
                    <h1>5</h1>
                </div>
                <div>
                    <h1>6</h1>
                </div>
                <div>
                    <h1>7</h1>
                </div>
                <div>
                    <h1>8</h1>
                </div>
                <div>
                    <h1>9</h1>
                </div>
                <div>
                    <h1>10</h1>
                </div>
                <div>
                    <h1>11</h1>
                </div>
            </div>
            <h2>Fixed width elements, space-around style</h2>
            <p>Using auto-fit minmax() and justify-items: center</p>
            <div className="grid fix-grid--around">
                <div className="fix-el">
                    <h1>1</h1>
                </div>
                <div className="fix-el">
                    <h1>2</h1>
                </div>
                <div className="fix-el">
                    <h1>3</h1>
                </div>
                <div className="fix-el">
                    <h1>4</h1>
                </div>
                <div className="fix-el">
                    <h1>5</h1>
                </div>
                <div className="fix-el">
                    <h1>6</h1>
                </div>
                <div className="fix-el">
                    <h1>7</h1>
                </div>
                <div className="fix-el">
                    <h1>8</h1>
                </div>
                <div className="fix-el">
                    <h1>9</h1>
                </div>
                <div className="fix-el">
                    <h1>10</h1>
                </div>
                <div className="fix-el">
                    <h1>11</h1>
                </div>
            </div>
            <h2>Fixed width elements, space-between style</h2>
            <p>Using auto-fit and justify-content:space-between</p>
            <div className="grid fix-grid--between">
                <div className="fix-el">
                    <h1>1</h1>
                </div>
                <div className="fix-el">
                    <h1>2</h1>
                </div>
                <div className="fix-el">
                    <h1>3</h1>
                </div>
                <div className="fix-el">
                    <h1>4</h1>
                </div>
                <div className="fix-el">
                    <h1>5</h1>
                </div>
                <div className="fix-el">
                    <h1>6</h1>
                </div>
                <div className="fix-el">
                    <h1>7</h1>
                </div>
                <div className="fix-el">
                    <h1>8</h1>
                </div>
                <div className="fix-el">
                    <h1>9</h1>
                </div>
                <div className="fix-el">
                    <h1>10</h1>
                </div>
                <div className="fix-el">
                    <h1>11</h1>
                </div>
            </div>
            <h2>Flexbox issue demo</h2>
            <p>With growing / shrinking elements and space-between</p>
            <div className="flex">
                <div>
                    <h1>1</h1>
                </div>
                <div>
                    <h1>2</h1>
                </div>
                <div>
                    <h1>3</h1>
                </div>
                <div>
                    <h1>4</h1>
                </div>
                <div>
                    <h1>5</h1>
                </div>
                <div>
                    <h1>6</h1>
                </div>
                <div>
                    <h1>7</h1>
                </div>
                <div>
                    <h1>8</h1>
                </div>
                <div>
                    <h1>9</h1>
                </div>
                <div>
                    <h1>10</h1>
                </div>
                <div>
                    <h1>11</h1>
                </div>
            </div>
            <h2>Flexbox issue demo</h2>
            <p>With fixed width elements and space-between</p>
            <div className="flex space-bt">
                <div>
                    <h1>1</h1>
                </div>
                <div>
                    <h1>2</h1>
                </div>
                <div>
                    <h1>3</h1>
                </div>
                <div>
                    <h1>4</h1>
                </div>
                <div>
                    <h1>5</h1>
                </div>
                <div>
                    <h1>6</h1>
                </div>
                <div>
                    <h1>7</h1>
                </div>
                <div>
                    <h1>8</h1>
                </div>
                <div>
                    <h1>9</h1>
                </div>
                <div>
                    <h1>10</h1>
                </div>
                <div>
                    <h1>11</h1>
                </div>
            </div>
        </div>
    )
}

export default Ex3
