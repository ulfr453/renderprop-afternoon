// import react, {Component} from 'react'

// class CurrencyConverter extends Component{
//     state = {
//         currencyChosen: false,
//         selectedCurrency: 'Select Currency',
//         amount:0

//         }
//     }

//     render(){
//         const currencyData = [
//             { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
//             { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
//             { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
//             { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
//             { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
//         ]

//        const currencyOptions = currencyData.map((currency, index) => (
//            <option key={currency.id} value={index}>
//                {currency.name}
//            </option>
//        ))

//        handleAmountIncrease = () => {
//            this.setState((prevState) => {
//                return {
//                    amount: prevState.amount + 1
//                }
//            })
//        }
       
       
//        handleAmountDecrease = () => {
//            this.setState((prevState) => {
//                return {
//                    amount: prevState.amount - 1
//                }
//            })
//        }

//        handleOptionSelect = (event) => {
//            const userValue = event.target.value
//            this.setState(() => {
//                return { 
//                    selectedCurrency: userValue,
//                    currencyChosen: userValue === 'Select Currency' ? false : true
//                }
//            })
//        }

//        render(){
//         return(
//             <div>
//                 <select value={this.state.selectedCurrency}
//                 onChange={this.handleOptionSelect}>
//                     <option value='Select Currency'>Select Currency</option>
//                     {currencyOptions}
                    
//                 </select>
//                 <div>
//                     <button className='add' onClick={this.handleAmountIncrease}>+</button>
//                     <button className='minus' onClick={this.handleAmountDecrease}>-</button>
                    

//                 </div>
//                 {this.props.render(
//                     currencyData[this.state.selectedCurrency],
//                     this.state.amount
//                 )}
//             </div>

//         )}
//     }


// export default CurrencyConverter



// why the hell does this assignment make you delete this entire section that you had made? that made no sense whatsoever and is poorly instructed. you had me on board until this crap



import React, { Component } from 'react'
import CurrencyDisplay from './CurrencyDisplay'

class CurrencyConverter extends Component {
	state = {
		currencyChosen: false,
		selectedCurrency: 'Select Currency',
		amount: 0
	}

	
	handleOptionSelect = (event) => {
		const userValue = event.target.value
		this.setState(() => {
			return {
				selectedCurrency: userValue,
				currencyChosen: userValue === 'Select Currency' ? false : true
			}
		})
	}
	
	render() {
		
		return (
			<div>
				
				// CREATE A TERNARY TO DETERMINE WHAT TO DISPLAY DEPENDING ON WHETHER
				// A CURRENCY HAS BEEN SELECTED OR NOT
				{this.state.currencyChosen ? (
				{this.state.currencyChosen ? (
					this.props.render(
						currencyData[this.state.selectedCurrency],
						this.state.amount
					)
				) : (
					<p>Please Select Currency</p>
				)}
			</div>
		)
	}
}

export default CurrencyConverter