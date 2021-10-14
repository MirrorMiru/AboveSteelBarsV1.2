var player
var npc1, npc2, npc3
var platform, Platform2
var enemy1, Enemy2, enemy3, enemy4
var backg, ts, titleN, backg2, backg3
var gameState = "title"
var dia1 = 0
var dia2 = 0
var dia3 = 0
var w = false
var button
var PG, JG
var death = false
var jumpbox, jumpbox2, jumpboxM1, jumpboxM2
var moving1, moving2
var bouncebox, bouncebox2, bounceboxE1,bounceboxE2
var bounceboxE3,bounceboxE4, bounceboxE5, bounceboxE6
var bounceboxM1
var d1,d2,d3,d4,d5
var d6,d7,d8,d9,d10
var chains
var checkpoint = 0
var deathtype = 0
var deathmessage
var npc1D, npc2D
var wrench
var runs, jumps, walks
var dies, respawns
var getw
var music
var dieplay = 0
var credits





function preload(){





    bgImg = loadImage("images/Bg.png")

    decal1 = loadImage("images/decalB1.png")
    decal2 = loadImage("images/decalB2.png")
    decal3 = loadImage("images/decalB3.png")
    decalH = loadImage("images/decalH.png")
    decalR = loadImage("images/decalR.png")
    decalW = loadImage("images/decalW.png")

    
    PlayerWR = loadAnimation("images/Walk1R.png", "images/Walk2R.png","images/Walk3R.png","images/Walk4R.png","images/Walk5R.png")
    PlayerWL = loadAnimation("images/Walk1L.png", "images/Walk2L.png","images/Walk3L.png","images/Walk4L.png","images/Walk5L.png")
    PlayerRR = loadAnimation("images/Run1.png","images/Run2.png","images/Run3.png")
    PlayerRL = loadAnimation("images/Run1L.png","images/Run2L.png","images/Run3L.png")
    PlayerI = loadAnimation("images/Idle.png")
    PlayerJ = loadAnimation("images/JumpR.png")
    PlayerJL = loadAnimation("images/JumpL.png")
    PlayerOOF = loadAnimation("images/PlayerKO.png")

 
    Enemy1L = loadAnimation("images/Enemy1L.png")
    Enemy1R = loadAnimation("images/Enemy1R.png")


    NpcI1R = loadAnimation("images/Npc1.png")
    NpcI1L = loadAnimation("images/Npc1L.png")
    NpcI2L = loadAnimation("images/Npc2.png")
    NpcI2R = loadAnimation("images/Npc2R.png")

    Enemy3U = loadAnimation("images/Enemy3up.png")
    Enemy3D = loadAnimation("images/Enemy3down.png")

    NpcI3 = loadImage("images/Npc3.png")

    EnemyI1 = loadImage("images/Enemy1R.png")
    Enemy2W = loadAnimation("images/Enemy2W1L.png","images/Enemy2W2L.png","images/Enemy2W3L.png")
    Enemy2WR = loadAnimation("images/Enemy2W1R.png","images/Enemy2W2R.png","images/Enemy2W3R.png")
    Enemy2I = loadAnimation("images/Enemy2L.png")

    PlatformI1 = loadImage("images/Platform1.png")
    PlatformI2 = loadImage("images/Platform2.png")

    bgTitle = loadImage("images/Title.png")
    Ntitle1 = loadImage("images/Logo.png")
    Ntitle2 = loadImage("images/Logo2.png")

    ChainI = loadImage("images/Chain.png")

    talk1 = loadAnimation("images/Talk.png")
    talk2 = loadAnimation("images/Boss1.png")
    talk3 = loadAnimation("images/Playerspeak.png")
    talk4 = loadAnimation("images/Boss2.png")

    talknw = loadAnimation("images/Bossnowrench.png")

    talk5 = loadAnimation("images/Boss3.png")
    talk6 = loadAnimation("images/Bosseod.png")

    freind1 = loadAnimation("images/Talk.png")
    freind2 = loadAnimation("images/Fren1.png")
    freind3 = loadAnimation("images/Playerspeak.png")
    freind4 = loadAnimation("images/Fren2.png")

    wrenchI = loadAnimation("images/w1.png","images/w2.png","images/w3.png","images/w4.png","images/w5.png","images/w6.png","images/w7.png","images/w8.png")

    dief = loadAnimation("images/DieJump.png")
    diee = loadAnimation("images/DieEnemy.png")
    diew = loadAnimation("images/DieWrench.png")

    creditI = loadImage("images/Credit.png")

    walks = loadSound("Sounds/Walking.mp3")
    runs = loadSound("Sounds/Run.mp3")
    jumps = loadSound("Sounds/Jump.mp3")
    dies = loadSound("Sounds/oof.mp3")
    respawns = loadSound("Sounds/respawn.mp3")
    music = loadSound("Sounds/OrigamiRepetikaCure.mp3")
    getw = loadSound("Sounds/get.mp3")



}



   
    
function setup(){
    createCanvas(windowWidth, windowHeight)
    
    PG = new Group()
    JG = new Group()

    //background 1
    backg = createSprite(windowWidth/2 , windowHeight/2)
    backg.addImage(bgImg)
    backg.scale = 2.5
    backg.visible = false
    
    //background 2
    backg2 = createSprite(windowWidth/2+4500 , windowHeight/2)
    backg2.addImage(bgImg)
    backg2.scale = 2.5
    backg2.visible = false

    backg3 = createSprite(windowWidth/2+8500 , windowHeight/2)
    backg3.addImage(bgImg)
    backg3.scale = 2.5
    backg3.visible = false

    //platform = createSprite(windowWidth/2,windowHeight-100, 500, 400)



    d5 = createSprite(windowWidth/2+500,windowHeight-50)
    d5.addImage(PlatformI2)
    d5.scale = 0.5

    d1 = createSprite(windowWidth/2+200,windowHeight-150)
    d2 = createSprite(windowWidth/2+200,windowHeight-200)
    d1.addImage(decalH)
    d2.addImage(decalW)

    d3 = createSprite(windowWidth/2+500,windowHeight-150)
    d4 = createSprite(windowWidth/2+500,windowHeight-200)
    
    d3.addImage(decalW)
    d4.addImage(decal2)

    createPlatform(windowWidth/2,windowHeight-100, 0.5)
    
    createPlatform2(windowWidth/2 + 1000,windowHeight-180 , 0.2)

    createPlatform(windowWidth/2 + 400 ,windowHeight-100 ,0.5)

    createPlatform(windowWidth/2 + 800 ,windowHeight-100 ,0.5)

    createChain(windowWidth/2 + 1150,windowHeight-750 , 1)

    createPlatform2(windowWidth/2 + 1150,windowHeight-500 , 0.2)

    createPlatform2(windowWidth/2 + 1150,windowHeight-180 , 0.2)

    createPlatform2(windowWidth/2 + 1500,windowHeight-180 , 0.2)

    createPlatform2(windowWidth/2 + 1880, windowHeight-160 , 0.2)

  


    jumpboxM1 = createSprite(windowWidth/2 + 2100, windowHeight-160)
    jumpboxM1.debug = true
    JG.setVisibleEach(false)
    jumpboxM1.setCollider("rectangle",0,0,150,80)
    JG.add(jumpboxM1)

    

    bouncebox = createSprite(windowWidth/2 + 1980, windowHeight-160,50,50,)
    bouncebox.visible = false
   // bouncebox.debug = true

    bouncebox2 = createSprite(windowWidth/2 + 2780, windowHeight-160 , 50,50)
    //bouncebox2.debug = true
    bouncebox2.visible = false

    moving1 = createSprite(windowWidth/2 + 2100, windowHeight-160)
    moving1.addImage(PlatformI1)
    moving1.scale = 0.2
    moving1.velocityX = 4

    moving2 = createSprite(windowWidth/2 + 7000, windowHeight - 20,20,20)
    moving2.setCollider("rectangle", -10 , -360 ,580,50)
   // moving2.debug = true
    moving2.addImage(PlatformI2)
    moving2.scale = 0.5
    moving2.velocityY = -3

    bounceboxE1 = createSprite(windowWidth/2 + 2950, windowHeight/2+100,40,40)
    bounceboxE1.visible = false
    bounceboxE2 = createSprite(windowWidth/2 + 3550, windowHeight/2+100,40,40)
    bounceboxE2.visible = false

    bounceboxE3 = createSprite(windowWidth/2 + 4750, 30,40,40)
    //bounceboxE3.debug = true
    bounceboxE3.visible = false
    bounceboxE4 = createSprite(windowWidth/2 + 4750, windowHeight-50,40,40)
   // bounceboxE4.debug = true
    bounceboxE4.visible = false

    bounceboxM1 = createSprite(windowWidth/2 + 7000, windowHeight - 350,20,20)
    bounceboxM1.visible = false

    jumpboxM2 = createSprite(windowWidth/2 + 7000, windowHeight - 50)
    jumpboxM2.setCollider("rectangle", -10 , -200 ,300,20)
    jumpboxM2.visible = false
    JG.add(jumpboxM2)

    bounceboxE5 = createSprite(windowWidth/2 + 8000, 30,40,40)
    //bounceboxE3.debug = true
    bounceboxE5.visible = false
    bounceboxE6 = createSprite(windowWidth/2 + 8000, windowHeight-50,40,40)
   // bounceboxE4.debug = true
    bounceboxE6.visible = false





    createPlatform2(windowWidth/2 + 2880, windowHeight-160 , 0.2)

    createPlatform2(windowWidth/2 + 3250, windowHeight-265 , 0.2)

    createPlatform(windowWidth/2 + 3050, windowHeight-100 , 0.5)

    createPlatform(windowWidth/2 + 3450, windowHeight-100 , 0.5)



    createPlatform2(windowWidth/2 + 3950, windowHeight/2 + 100 , 0.3)

    createPlatform(windowWidth/2 + 4500, windowHeight/2 + 400 , 0.5)

 



    createPlatform2(windowWidth/2 + 5000, windowHeight/2 + 100 , 0.2)

    createPlatform2(windowWidth/2 + 5500, windowHeight/2 + 150 , 0.1)

    createPlatform2(windowWidth/2 + 6000, windowHeight/2 + 100 , 0.2)

    createPlatform(windowWidth/2 + 6400, windowHeight - 100 , 0.5)


  

    createPlatform(windowWidth/2 + 7670, windowHeight - 140 , 0.5)



    createPlatform2(windowWidth/2 + 8450, windowHeight - 200 , 0.25)

    createPlatform(windowWidth/2 + 8250, windowHeight - 100 , 0.5)

    createPlatform2(windowWidth/2 + 9000, windowHeight - 250 , 0.2)

  







   

    
   
    PG.setVisibleEach(false)

//=======================================================NPC====================================================================
    npc1 = createSprite(windowWidth/2+450 , windowHeight/2-200)
    npc1.addAnimation("Npc1L",NpcI1L)
    npc1.addAnimation("Npc1R",NpcI1R)
    npc1.scale = 0.20
    //npc1.debug = true
    npc1.setCollider("rectangle",100,0,600,1100)
    npc1D =createSprite(npc1.x,npc1.y)
    npc1D.addAnimation("1",talk1)
    npc1D.addAnimation("2",talk2)
    npc1D.addAnimation("3",talk3)
    npc1D.addAnimation("4",talk4)

    npc1D.addAnimation("nw",talknw)

    npc1D.addAnimation("5",talk5)
    npc1D.addAnimation("6",talk6)
    npc1D.visible = false
    //////////////////////////////////////////////////////////////////////////

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++NPC2+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
npc2 = createSprite(windowWidth/2+4500 , windowHeight/2-200)
npc2.addAnimation("Npc2L",NpcI2L)
npc2.addAnimation("Npc2R",NpcI2R)
npc2.scale = 0.21
//npc1.debug = true
npc2.setCollider("rectangle",100,0,600,1150)
npc2D =createSprite(npc2.x,npc2.y)
npc2D.addAnimation("f1",freind1)
npc2D.addAnimation("f2",freind2)
npc2D.addAnimation("f3",freind3)
npc2D.addAnimation("f4",freind4)
    

//=========================================================PLAYER=============================================================================
    player = createSprite(windowWidth/2 , windowHeight/2-200)/////////////////////////////////////////////////////////////////
    player.addAnimation("walk1", PlayerWR)
    player.addAnimation("walk2",PlayerWL)
    player.addAnimation("idle", PlayerI)
    player.addAnimation("jump",PlayerJ)
    player.addAnimation("jump2",PlayerJL)
    player.addAnimation("oof",PlayerOOF)
    player.addAnimation("run1", PlayerRR)
    player.addAnimation("run2", PlayerRL)
    player.changeAnimation("idle",PlayerI)
    player.scale = 0.35
   
//=========================================================ENEMY===========================================================================
    enemy1 = createSprite(windowWidth/2 +2450, windowHeight-270)
    enemy1.addAnimation("Enemy1L",Enemy1L)
    enemy1.addAnimation("Enemy1R",Enemy1R)
    enemy1.scale = 0.4
    enemy1.setCollider("circle",0,0,80)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++enemy 2+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    enemy2 = createSprite(windowWidth/2 + 3250, windowHeight/2-200)
    enemy2.addAnimation("Enemy2R",Enemy2WR)
    enemy2.addAnimation("Enemy2L", Enemy2W)
    enemy2.setCollider("rectangle",0,100,400,1000)
    enemy2.scale = 0.15
    enemy2.velocityX = 4.5
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++enemy 3+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    enemy3 = createSprite(windowWidth/2 + 4750, windowHeight/2-100)

    enemy3.addAnimation("upE",Enemy3U)
    enemy3.addAnimation("downE",Enemy3D)
   // enemy3.debug = true
    enemy3.setCollider("rectangle",0,0,170,300)
    enemy3.scale = 0.4
    enemy3.velocityY = 10
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++enemy4+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
enemy4 = createSprite(windowWidth/2 + 8000, windowHeight/2-100)

enemy4.addAnimation("upE",Enemy3U)
enemy4.addAnimation("downE",Enemy3D)
// enemy3.debug = true
enemy4.setCollider("rectangle",0,0,170,300)
enemy4.scale = 0.4
enemy4.velocityY = 11.5
//===============================================================wrench==============================================================================
wrench = createSprite(windowWidth/2+9000 , windowHeight-350)
wrench.addAnimation("w",wrenchI)
wrench.scale = 0.3

//================================================================message========================================================
deathmessage = createSprite(windowWidth/2, windowHeight/2)
deathmessage.addAnimation("1",dief)
deathmessage.addAnimation("2",diee)
deathmessage.addAnimation("3",diew)
deathmessage.visible = false

 


  
//================================================================title====================================================================
    ts = createSprite(windowWidth/2, windowHeight/2)
    ts.addImage(bgTitle)
    ts.scale = 3.1
    ts.visible = false

    titleN = createSprite(windowWidth/2, windowHeight/2-70)
    titleN.addImage(Ntitle2)
    titleN.scale = .20
    titleN.visible = false

    credits = createSprite(windowWidth-250, windowHeight - 100)
    credits.addImage(creditI)
    credits.scale = .4
    credits.visible = false
        
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}

function draw(){
    background(255)
if(keyWentDown("P")){
    console.log(player.x)
    console.log(player.y)
}
  
    if(gameState === "play"){
     
        if(music.isPlaying() === false){
            music.loop()
        }
      
        //====================GAME START===============================
        backg.visible = true
        backg2.visible = true
        backg3.visible = true
        ts.visible = false
        credits.visible = false
        titleN.visible = false
        PG.setVisibleEach(true)
        JG.setVisibleEach(false)
   
        //===========================camera============================

        camera.position.x = player.x
        //camera.position.y = player.y
        

       //======================collide==================================

        npc1.collide(PG)
        npc2.collide(PG)
        enemy2.collide(PG)
        player.collide(PG)
        player.collide(moving1)
        player.collide(moving2)
        //=======================text==================================
        //npc1

        //========================================start============================================

        if(w === false){
        if(player.isTouching(npc1)){
            npc1D.visible = true
            //console.log(dia1)
            
            if(dia1 < 5){
            if(keyWentUp("SPACE")){
                dia1 = dia1 + 1
            }
        }

        }
        else{
            npc1D.visible = false
        }

        if(player.isTouching(npc1)&& dia1 === 0){
            if(keyWentDown("SPACE")){
            npc1D.scale = 0.5
            npc1D.changeAnimation("2",talk2)
            }
        }

        if(player.isTouching(npc1)&& dia1 === 1){
            if(keyWentDown("SPACE")){
            npc1D.scale = 0.5
            npc1D.changeAnimation("3",talk3)
            }
        }

        if(player.isTouching(npc1)&& dia1 === 2){
            if(keyWentDown("SPACE")){
                npc1D.changeAnimation("4",talk4)
            }
        }

        if(player.isTouching(npc1)&& dia1 === 3){
            if(keyWentDown("SPACE")){
            npc1D.scale = 1
            npc1D.changeAnimation("1",talk1)
        }

        }
        if(player.isTouching(npc1)&& dia1 === 4 && w === false){
            if(keyWentDown("SPACE")){
            npc1D.scale = 0.5
            npc1D.changeAnimation("nw",talknw)
        }
        }
    }

    if(w === true){
        if(player.isTouching(npc1)){
            npc1D.visible = true
           // console.log(dia2)
            
            if(dia2 < 3){
            if(keyWentUp("SPACE")){
                dia2 = dia2 + 1
            }
        }
        }
        else{
            npc1D.visible = false
        }


        if(player.isTouching(npc1)&& dia2 === 0){
            if(keyWentDown("SPACE")){
            npc1D.scale = 0.5
            npc1D.changeAnimation("5",talk5)
            }
        }

        if(player.isTouching(npc1)&& dia2 === 1){
            if(keyWentDown("SPACE")){
                npc1D.changeAnimation("6",talk6)
            }
        }


    }

    //=======================================end===========================================================
    //npc2


        if(player.isTouching(npc2)){
            npc2D.visible = true
            console.log(dia3)
            checkpoint = 1
            
            if(dia3 < 3){
            if(keyWentUp("SPACE")){
                dia3 = dia3 + 1
            }
        }
        }
        else{
            npc2D.visible = false
        }

  
        if(player.isTouching(npc2)&& dia3 === 0){
            if(keyWentDown("SPACE")){
            npc2D.scale = 0.5
            npc2D.changeAnimation("f2",freind2)
            }
        }

        if(player.isTouching(npc2)&& dia3 === 1){
            if(keyWentDown("SPACE")){
                npc2D.changeAnimation("f3",freind3)
            }
        }

            
        if(player.isTouching(npc2)&& dia3 === 2){
            if(keyWentDown("SPACE")){
                npc2D.changeAnimation("f4",freind4)
            }
        }






//====================wrench========================================
if(player.isTouching(wrench)){
    if(getw.isPlaying() === false && w === false){
        getw.play()
    }
    wrench.visible = false
    w = true
}


        
        

        //=======================moving 1===============================
        moving1.bounceOff(bouncebox)
        moving1.bounceOff(bouncebox2)

        jumpboxM1.x = moving1.x

        //======================moving2====================================
        moving2.bounceOff(bounceboxM1)
        if(moving2.y > windowHeight){
            moving2.velocityY = -3
        }

        jumpboxM2.y = moving2.y

        //===================gravity===================================
        player.velocityY += 1
        npc1.velocityY += 1
        npc2.velocityY += 1
        enemy2.velocityY += 1

        //=====================npc=====================================
        if(player.x > npc1.x){
            npc1.changeAnimation("Npc1R",NpcI1R)
        }

        if(player.x < npc1.x || player.x === npc1.x ){
            npc1.changeAnimation("Npc1L",NpcI1R)
        }

        npc1D.x = npc1.x
        npc1D.y = npc1.y -150



        //++++++++++++++++++++npc2+++++++++++++++++++++++++++++++++++++++++
        if(player.x > npc2.x){
            npc2.changeAnimation("Npc2L",NpcI2L)
        }

        if(player.x < npc2.x || player.x === npc1.x ){
            npc2.changeAnimation("Npc2R",NpcI2R)
        }

        npc2D.x = npc2.x
        npc2D.y = npc2.y -150

        //==================================== enemy2 ==============================================
        enemy2.bounceOff(bounceboxE1)
        enemy2.bounceOff(bounceboxE2)

        if(enemy2.velocityX > 0){
            enemy2.changeAnimation("Enemy2R",Enemy2WR)
        }

        else if(enemy2.velocityX < 0){
            enemy2.changeAnimation("Enemy2L",Enemy2W)
        }
        
        //====================================enemy3================================================
        enemy3.bounceOff(bounceboxE3)
        enemy3.bounceOff(bounceboxE4)

        if(enemy3.velocityY < 0){
            enemy3.changeAnimation("upE",Enemy3U)
        }

        else if(enemy3.velocityY > 0){
            enemy3.changeAnimation("downE",Enemy3D)
        }

        //========================================enemy4========================================================
        enemy4.bounceOff(bounceboxE5)
        enemy4.bounceOff(bounceboxE6)

        if(enemy4.velocityY < 0){
            enemy4.changeAnimation("upE",Enemy3U)
        }

        else if(enemy4.velocityY > 0){
            enemy4.changeAnimation("downE",Enemy3D)
        }

     

        
        //=======================player================================

        //DIE
        if(death === true){

            if(dies.isPlaying() === false && dieplay === 0){
                dies.play()
            }
            player.changeAnimation("oof", PlayerOOF)
            player.scale = 0.18
            player.setCollider("rectangle", 0,0,550,450)
            player.velocityX = 0
            player.velocityY = player.velocityY + 1
            dieplay = 1
          
            
            if(keyWentDown("SPACE")){
                
                if(respawns.isPlaying() === false){
                    respawns.play()
                }

                reset()
            }
            else if(death === false){
                player.changeAnimation("idle", PlayerI)
              
            }
            
        }
if(death === false){
if(w === false){
        if(player.y > windowWidth){
            death = true
            deathtype = 1
            deathmessage.visible = true
           //console.log(deathtype)
        }

        if(player.isTouching(enemy1) ||player.isTouching(enemy2) ||player.isTouching(enemy3) || player.isTouching(enemy4)){
            deathtype = 2
            death = true
            deathmessage.visible = true
           
        }
}
else if(w === true){
    if(player.y > windowWidth){
        death = true
        deathtype = 3
        deathmessage.visible = true
    }

    if(player.isTouching(enemy1) ||player.isTouching(enemy2) ||player.isTouching(enemy3) || player.isTouching(enemy4)){
        deathtype = 3
        death = true
        deathmessage.visible = true
    }
}
}

if(deathtype === 1){
    deathmessage.changeAnimation("1",dief)
    deathmessage.visible = true
    deathmessage.x = player.x
}
else if(deathtype === 2){
    deathmessage.changeAnimation("2",diee)
    deathmessage.visible = true
    deathmessage.x = player.x
}
else if(deathtype === 3){
    deathmessage.changeAnimation("3",diew)
    deathmessage.visible = true
    deathmessage.x = player.x

}
else{
    deathmessage.visible = false
}

if(death === false){
        //JUMP
        if(keyWentDown("W") && player.isTouching(JG)){
            player.changeAnimation("jump",PlayerJ)
            player.velocityY = -20
            jumps.play()
        }
        if(keyWentUp("W")){
            player.changeAnimation("idle",PlayerI)
        }


        //RIGHT
        if(keyDown("D")){

            if(walks.isPlaying() === false&& player.isTouching(JG)){
                walks.play()
            }

            player.changeAnimation("walk1",PlayerWR)
            if(keyDown("W")){
              player.changeAnimation("jump",PlayerJ)  
            }
            if(keyDown("SHIFT")){
                player.changeAnimation("run1",PlayerRR)
                walks.stop()
                if(runs.isPlaying() === false && player.isTouching(JG)){
                    runs.play()
                }
            }
            if(keyDown("SHIFT")){
                player.velocityX = 9
            }
            else{
                player.velocityX = 6
            }
            
            ///////////////////////////////////////////////////////////////////////////////
        }
        if(keyWentUp("D")){
            player.velocityX = 0
            player.changeAnimation("idle",PlayerI)
            walks.stop()
            runs.stop()
        }

        //LEFT
        if(keyDown("A")){

            if(walks.isPlaying() === false&& player.isTouching(JG)){
                walks.play()
            }

            player.changeAnimation("walk2",PlayerWL)
            if(keyDown("W")){
                player.changeAnimation("jump2",PlayerJL)  
              }
              if(keyDown("SHIFT")){
                player.changeAnimation("run2",PlayerRL)  
                walks.stop()
                if(runs.isPlaying() === false && player.isTouching(JG)){
                    runs.play()
                }
              }
            if(keyDown("SHIFT")){
                player.velocityX = -9
            }
            else{
                player.velocityX = -6
            }
        }
        if(keyWentUp("A")){
            player.velocityX = 0
            player.changeAnimation("idle",PlayerI)
            walks.stop()
            runs.stop()
        }
    }

        
    }  

   if(gameState === "title"){
        ts.visible = true
        credits.visible = true
        titleN.visible = true
    }
    drawSprites()
    
if(gameState==="title"){

    textSize(25)
    fill("#5dcad8")
    strokeWeight(3)
    stroke(0)
    text("Press 'SPACE' to start", windowWidth/2 -150, windowHeight/2 +70)

    if(keyDown("SPACE")){
        gameState = "play"
    }
    
}

}



function createPlatform(xpos,ypos,scale){

 

    platform = createSprite(xpos,ypos)
    jumpbox = createSprite(xpos,ypos)

    

    
    //platform.debug = true
    //jumpbox.debug = true

    jumpbox.setCollider("rectangle", -10 , -200 ,300,20)
   
    platform.setCollider("rectangle", -10 , -360 ,580,50)
        platform.addImage(PlatformI2)
        platform.scale = scale

    PG.add(platform)
    JG.add(jumpbox)

}

function createPlatform2(xpos,ypos,scale){
    platform2 = createSprite(xpos,ypos)
    jumpbox2 = createSprite(xpos,ypos - 20)
    jumpbox2.addImage(PlatformI1)
    jumpbox2.scale = scale
    platform2.addImage(PlatformI1)
    platform2.scale = scale
    //platform2.debug = true
    PG.add(platform2)
    JG.add(jumpbox2)
}

function createChain(xpos,ypos,scale){
   chains = createSprite(xpos,ypos)
   chains.addImage(ChainI)
   chains.scale = scale
}

function reset(){
    w = false
    death = false
    deathtype = 0
    dieplay = 0
    dia1 = 0
    dia2 = 0
    dia3 = 0
    npc1D.changeAnimation("1",talk1)
    npc2D.changeAnimation("f1",freind1)
    npc1D.scale = 1
    npc2D.scale = 1
    player.changeAnimation("idle", PlayerI)
    player.setCollider("rectangle",0,0)
    wrench.visible = true
    player.scale = 0.35
    player.velocityY = 0
    player.y = windowHeight/2 - 200
    if(checkpoint === 0){
        player.x = windowWidth/2
    }
    if(checkpoint === 1){
        player.x = windowWidth/2+4500
    }
    if(respawns.isPlaying() === false){
        respawns.play
    }
    

}
