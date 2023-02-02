import {Cards} from '../utils/cards.js'

function randomIndex() {
    let randomNumbers = [];
    while (randomNumbers.length < 12) {
      let randomNumber = Math.floor(Math.random() * 40);
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    return randomNumbers;
  }

const getHome = (req, res)=>{
    
    res.render('home')
}

const getCards = (req, res)=>{
    const i = randomIndex()
    const player1 = [Cards[i[0]], Cards[i[1]], Cards[i[2]]]
    const player2 = [Cards[i[3]], Cards[i[4]], Cards[i[5]]]
    const player3 = [Cards[i[6]], Cards[i[7]], Cards[i[8]]]
    const player4 = [Cards[i[9]], Cards[i[10]], Cards[i[11]]]
    req.session.cards1 = player1
    req.session.cards2 = player2
    req.session.cards3 = player3
    req.session.cards4 = player4
    
    res.redirect('/jugador1')
}
const final = (req, res)=>{
    const cards1 = req.session.cards1
    const cards2 = req.session.cards2
    const cards3 = req.session.cards3
    const cards4 = req.session.cards4

    res.render('final', {cards1, cards2, cards3, cards4})
}

const jugador1 = (req, res)=>{
    const cards = req.session.cards1
    res.render('jugador', {cards, next:'jugador2', number:1})
}
const jugador2 = (req, res)=>{
    const cards = req.session.cards2
    res.render('jugador', {cards, next:'jugador3', number:2})
}
const jugador3 = (req, res)=>{
    const cards = req.session.cards3
    res.render('jugador', {cards, next:'jugador4', number:3})
}
const jugador4 = (req, res)=>{
    const cards = req.session.cards4
    res.render('jugador', {cards, next:'final', number:4})
}



export const controller = {getHome, getCards, final, jugador1, jugador2, jugador3, jugador4}