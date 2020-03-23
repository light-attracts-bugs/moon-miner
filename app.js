let cheese = 0
let pickEnhancements = 0
let pickEnhancementPrice = 50
let autoPicks = 0
let autoPickCPS = 1
let autoPickPrice = 150
let rovers = 0
let roverCPS = 3
let roverPrice = 400
let cheeseDrills = 0
let cheeseDrillCPS = 10
let cheeseDrillPrice = 1200
let CPC = 1
let defaultCPC = 5
let CPS = 0

draw()

function draw(){
  let cheeseElem = document.getElementById("cheese")
  let pickEnhancementsElem = document.getElementById("enhanced-pick")
  let autoPicksElem = document.getElementById("auto-picks")
  let roversElem = document.getElementById("rovers")
  let cheeseDrillsElem = document.getElementById("cheese-drills")
  let CPCElem = document.getElementById("CPC")
  let CPSElem = document.getElementById("CPS")
  let pickEnhancementPriceElem = document.getElementById("pick-enhancement-price")
  let autoPickPriceElem = document.getElementById("auto-pick-price")
  let roverPriceElem = document.getElementById("rover-price")
  let cheeseDrillPriceElem = document.getElementById("cheese-drill-price")

  cheeseElem.innerText = "Cheese: " + cheese
  pickEnhancementsElem.innerText = "Pick Enhancements: " + pickEnhancements + " CPC: " + pickEnhancements
  autoPicksElem.innerText = "Auto-Picks: " + autoPicks + " CPS: " + autoPicks * autoPickCPS
  roversElem.innerText = "Rovers: " + rovers + " CPS: " + rovers * roverCPS
  cheeseDrillsElem.innerText = "Cheese Drills: " + cheeseDrills + " CPS " +  cheeseDrills * cheeseDrillCPS
  CPCElem.innerText = "Cheese Per Click: " + CPC
  CPSElem.innerText = "Cheese Per Second " + (CPS)
  pickEnhancementPriceElem.innerText = "Price: " + pickEnhancementPrice
  autoPickPriceElem.innerText = "Price: " + autoPickPrice
  roverPriceElem.innerText = "Price: " + roverPrice
  cheeseDrillPriceElem.innerText = "Price: " + cheeseDrillPrice
}

function mine(){
  cheese += CPC
  draw()
}

function buyPickEnhancement(){
  if(cheese - pickEnhancementPrice >= 0){
    pickEnhancements++
    cheese -= pickEnhancementPrice
    pickEnhancementPrice += 5
  } else {
    return
  }
  draw()
}

function buyAutoPick(){
  if(cheese - autoPickPrice >= 0){
    autoPicks++
    cheese -= autoPickPrice
    autoPickPrice += 15
  }else {
    return
  }
  draw()
}

function buyRover(){
  if(cheese - roverPrice >= 0){
    rovers++
    cheese -= roverPrice
    roverPrice += 40
  } else {
    return
  }
  draw()
}

function buyCheeseDrill(){
  if(cheese - cheeseDrillPrice >= 0){
    cheeseDrills++
    cheese -= cheeseDrillPrice
    cheeseDrillPrice += 120
  } else {
    return
  }
  draw()
}

function calcCheese(){
  CPC = defaultCPC + pickEnhancements
  CPS = (autoPicks * autoPickCPS) + (rovers * roverCPS) + (cheeseDrills * cheeseDrillCPS)
  cheese += CPS
  draw()
}
