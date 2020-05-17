gdjs.Level1Code = {};
gdjs.Level1Code.forEachIndex2 = 0;

gdjs.Level1Code.forEachObjects2 = [];

gdjs.Level1Code.forEachTemporary2 = null;

gdjs.Level1Code.forEachTotalCount2 = 0;

gdjs.Level1Code.GDHeroObjects1= [];
gdjs.Level1Code.GDHeroObjects2= [];
gdjs.Level1Code.GDPlatformObjects1= [];
gdjs.Level1Code.GDPlatformObjects2= [];
gdjs.Level1Code.GDBarrelObjects1= [];
gdjs.Level1Code.GDBarrelObjects2= [];
gdjs.Level1Code.GDEdgeObjects1= [];
gdjs.Level1Code.GDEdgeObjects2= [];
gdjs.Level1Code.GDPrisonerObjects1= [];
gdjs.Level1Code.GDPrisonerObjects2= [];
gdjs.Level1Code.GDWinLoseObjects1= [];
gdjs.Level1Code.GDWinLoseObjects2= [];
gdjs.Level1Code.GDFireworksObjects1= [];
gdjs.Level1Code.GDFireworksObjects2= [];
gdjs.Level1Code.GDExplosionObjects1= [];
gdjs.Level1Code.GDExplosionObjects2= [];
gdjs.Level1Code.GDDebugObjects1= [];
gdjs.Level1Code.GDDebugObjects2= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};


gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBarrelObjects1Objects = Hashtable.newFrom({"Barrel": gdjs.Level1Code.GDBarrelObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEdgeObjects1Objects = Hashtable.newFrom({"Edge": gdjs.Level1Code.GDEdgeObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBarrelObjects1Objects = Hashtable.newFrom({"Barrel": gdjs.Level1Code.GDBarrelObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHeroObjects1Objects = Hashtable.newFrom({"Hero": gdjs.Level1Code.GDHeroObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBarrelObjects1Objects = Hashtable.newFrom({"Barrel": gdjs.Level1Code.GDBarrelObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Level1Code.GDExplosionObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHeroObjects1Objects = Hashtable.newFrom({"Hero": gdjs.Level1Code.GDHeroObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEdgeObjects1Objects = Hashtable.newFrom({"Edge": gdjs.Level1Code.GDEdgeObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEdgeObjects1Objects = Hashtable.newFrom({"Edge": gdjs.Level1Code.GDEdgeObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHeroObjects1Objects = Hashtable.newFrom({"Hero": gdjs.Level1Code.GDHeroObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPrisonerObjects1Objects = Hashtable.newFrom({"Prisoner": gdjs.Level1Code.GDPrisonerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFireworksObjects1Objects = Hashtable.newFrom({"Fireworks": gdjs.Level1Code.GDFireworksObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExplosionObjects2Objects = Hashtable.newFrom({"Explosion": gdjs.Level1Code.GDExplosionObjects2});gdjs.Level1Code.eventsList0x70af2c = function(runtimeScene) {

}; //End of gdjs.Level1Code.eventsList0x70af2c
gdjs.Level1Code.eventsList0x72c7fc = function(runtimeScene) {

{

gdjs.Level1Code.GDBarrelObjects1.createFrom(runtimeScene.getObjects("Barrel"));

for(gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.GDBarrelObjects1.length;++gdjs.Level1Code.forEachIndex2) {
gdjs.Level1Code.GDExplosionObjects2.length = 0;

gdjs.Level1Code.GDBarrelObjects2.length = 0;


gdjs.Level1Code.forEachTemporary2 = gdjs.Level1Code.GDBarrelObjects1[gdjs.Level1Code.forEachIndex2];
gdjs.Level1Code.GDBarrelObjects2.push(gdjs.Level1Code.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.Level1Code.GDBarrelObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDBarrelObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExplosionObjects2Objects, (( gdjs.Level1Code.GDBarrelObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDBarrelObjects2[0].getPointX("")), (( gdjs.Level1Code.GDBarrelObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDBarrelObjects2[0].getPointY("")) + 20, "");
}}
}

}


}; //End of gdjs.Level1Code.eventsList0x72c7fc
gdjs.Level1Code.eventsList0x5b70b8 = function(runtimeScene) {

{



}


{


{
gdjs.Level1Code.GDDebugObjects1.createFrom(runtimeScene.getObjects("Debug"));
{for(var i = 0, len = gdjs.Level1Code.GDDebugObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDebugObjects1[i].setString("Next barrel in: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "spawnBarrel")));
}
}}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDWinLoseObjects1.createFrom(runtimeScene.getObjects("WinLose"));
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "EndScene");
}{for(var i = 0, len = gdjs.Level1Code.GDWinLoseObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDWinLoseObjects1[i].hide();
}
}}

}


{



}


{


{
gdjs.Level1Code.GDBarrelObjects1.createFrom(runtimeScene.getObjects("Barrel"));
{for(var i = 0, len = gdjs.Level1Code.GDBarrelObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBarrelObjects1[i].addForce((gdjs.RuntimeObject.getVariableNumber(gdjs.Level1Code.GDBarrelObjects1[i].getVariables().getFromIndex(1))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.Level1Code.GDBarrelObjects1[i].getVariables().getFromIndex(0))), 0, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBarrelObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBarrelObjects1[i].rotate((gdjs.RuntimeObject.getVariableNumber(gdjs.Level1Code.GDBarrelObjects1[i].getVariables().getFromIndex(0))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.Level1Code.GDBarrelObjects1[i].getVariables().getFromIndex(1))), runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBarrelObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBarrelObjects1[i].returnVariable(gdjs.Level1Code.GDBarrelObjects1[i].getVariables().getFromIndex(1)).add(0.4);
}
}}

}


{

gdjs.Level1Code.GDBarrelObjects1.createFrom(runtimeScene.getObjects("Barrel"));
gdjs.Level1Code.GDEdgeObjects1.createFrom(runtimeScene.getObjects("Edge"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBarrelObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEdgeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7516836);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBarrelObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDBarrelObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBarrelObjects1[i].returnVariable(gdjs.Level1Code.GDBarrelObjects1[i].getVariables().getFromIndex(0)).mul(-(1));
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), "spawnBarrel");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDBarrelObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBarrelObjects1Objects, 620, -(50), "");
}{for(var i = 0, len = gdjs.Level1Code.GDBarrelObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBarrelObjects1[i].returnVariable(gdjs.Level1Code.GDBarrelObjects1[i].getVariables().getFromIndex(1)).setNumber(gdjs.randomInRange(1, 5));
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(2, 6));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnBarrel");
}}

}


{



}


{

gdjs.Level1Code.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDHeroObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDHeroObjects1[i].getY() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDHeroObjects1[k] = gdjs.Level1Code.GDHeroObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDHeroObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), true);
}}

}


{

gdjs.Level1Code.GDBarrelObjects1.createFrom(runtimeScene.getObjects("Barrel"));
gdjs.Level1Code.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHeroObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBarrelObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBarrelObjects1 */
/* Reuse gdjs.Level1Code.GDHeroObjects1 */
gdjs.Level1Code.GDWinLoseObjects1.createFrom(runtimeScene.getObjects("WinLose"));
gdjs.Level1Code.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Level1Code.GDWinLoseObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDWinLoseObjects1[i].setString("Oh noes! " + gdjs.evtTools.string.newLine() + "Press any key to try again.");
}
}{for(var i = 0, len = gdjs.Level1Code.GDWinLoseObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDWinLoseObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "EndScene");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExplosionObjects1Objects, (( gdjs.Level1Code.GDHeroObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDHeroObjects1[0].getPointX("")), (( gdjs.Level1Code.GDHeroObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDHeroObjects1[0].getPointY("")) + 20, "");
}{for(var i = 0, len = gdjs.Level1Code.GDBarrelObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBarrelObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDEdgeObjects1.createFrom(runtimeScene.getObjects("Edge"));
gdjs.Level1Code.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHeroObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEdgeObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDEdgeObjects1 */
/* Reuse gdjs.Level1Code.GDHeroObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDHeroObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHeroObjects1[i].separateFromObjectsList(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEdgeObjects1Objects, false);
}
}}

}


{

gdjs.Level1Code.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));
gdjs.Level1Code.GDPrisonerObjects1.createFrom(runtimeScene.getObjects("Prisoner"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHeroObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPrisonerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7520916);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPrisonerObjects1 */
gdjs.Level1Code.GDWinLoseObjects1.createFrom(runtimeScene.getObjects("WinLose"));
gdjs.Level1Code.GDFireworksObjects1.length = 0;

{for(var i = 0, len = gdjs.Level1Code.GDWinLoseObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDWinLoseObjects1[i].setString("Yay!");
}
}{for(var i = 0, len = gdjs.Level1Code.GDWinLoseObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDWinLoseObjects1[i].hide(false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFireworksObjects1Objects, (( gdjs.Level1Code.GDPrisonerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPrisonerObjects1[0].getPointX("")), (( gdjs.Level1Code.GDPrisonerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPrisonerObjects1[0].getPointY("")) + 20, "");
}{for(var i = 0, len = gdjs.Level1Code.GDPrisonerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPrisonerObjects1[i].setAnimationFrame(2);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "EndScene");
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "spawnBarrel");
}}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "EndScene");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "EndScene");
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "spawnBarrel");
}
{ //Subevents
gdjs.Level1Code.eventsList0x72c7fc(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "EndScene");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


}; //End of gdjs.Level1Code.eventsList0x5b70b8


gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDHeroObjects1.length = 0;
gdjs.Level1Code.GDHeroObjects2.length = 0;
gdjs.Level1Code.GDPlatformObjects1.length = 0;
gdjs.Level1Code.GDPlatformObjects2.length = 0;
gdjs.Level1Code.GDBarrelObjects1.length = 0;
gdjs.Level1Code.GDBarrelObjects2.length = 0;
gdjs.Level1Code.GDEdgeObjects1.length = 0;
gdjs.Level1Code.GDEdgeObjects2.length = 0;
gdjs.Level1Code.GDPrisonerObjects1.length = 0;
gdjs.Level1Code.GDPrisonerObjects2.length = 0;
gdjs.Level1Code.GDWinLoseObjects1.length = 0;
gdjs.Level1Code.GDWinLoseObjects2.length = 0;
gdjs.Level1Code.GDFireworksObjects1.length = 0;
gdjs.Level1Code.GDFireworksObjects2.length = 0;
gdjs.Level1Code.GDExplosionObjects1.length = 0;
gdjs.Level1Code.GDExplosionObjects2.length = 0;
gdjs.Level1Code.GDDebugObjects1.length = 0;
gdjs.Level1Code.GDDebugObjects2.length = 0;

gdjs.Level1Code.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
