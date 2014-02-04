/**
 * Created by thomasgros on 2/3/14.
 */

/** ITEMS **/
var items = [document.getElementById("item-1"), document.getElementById("item-2")];
Array.prototype.forEach.call(items,function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragend', handleDragEnd, false);
});

function handleDragStart(e) {
    this.style.opacity = '0.3';
    e.dataTransfer.effectAllowed = 'all';
    e.dataTransfer.setData('application/vnd.aiconoa.dnd-demo', this.id);
}

function handleDragEnd(e) {
    //in this demo we do nothing here
}

/** DND ZONES **/
var dndOkZone = document.getElementById("dnd-ok-zone");
var initialMessageDndOkZone = "Drop the items here.";
dndOkZone.innerHTML = initialMessageDndOkZone;
dndOkZone.addEventListener('dragenter', handleDragEnter, false);
dndOkZone.addEventListener('dragleave', handleDragLeave, false);
dndOkZone.addEventListener('dragover', handleDragOver, false);
dndOkZone.addEventListener('drop', handleDrop, false);

var dndNotOkZone = document.getElementById("dnd-not-ok-zone");
var initialMessageDndNotOkZone = "Don't drop the items here.";
dndNotOkZone.innerHTML = initialMessageDndNotOkZone;
dndNotOkZone.addEventListener('dragenter', handleDragEnter, false);
dndNotOkZone.addEventListener('dragleave', handleDragLeave, false);


function handleDragEnter(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'copy';

    return false;
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    var id = e.dataTransfer.getData('application/vnd.aiconoa.dnd-demo');
    console.log(id);
    if(id == "item-1") {
        if(this.innerHTML == initialMessageDndOkZone) {this.innerHTML = ""; } //reset
        this.innerHTML += "<div class='box blue-box' style='float:left'></div>";
    } else if (id == "item-2") {
        if(this.innerHTML == initialMessageDndOkZone) {this.innerHTML = ""; } //reset
        this.innerHTML += "<div class='box red-box' style='float:left'></div>";
    }

    this.classList.remove('over');

    return false;
}