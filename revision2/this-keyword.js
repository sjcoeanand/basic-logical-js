// 1)𝐈𝐧 𝐛𝐫𝐨𝐰𝐬𝐞𝐫 𝐝𝐞𝐯 𝐭𝐨𝐨𝐥𝐬 𝐭𝐡𝐢𝐬 𝐤𝐞𝐲𝐰𝐨𝐫𝐝 𝐰𝐢𝐥𝐥 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐰𝐢𝐧𝐝𝐨𝐰 (𝐠𝐥𝐨𝐛𝐚𝐥) 𝐨𝐛𝐣𝐞𝐜𝐭 
//  𝑬𝒙𝒂𝒎𝒑𝒍𝒆. 
 console.log(this)
//  𝐎𝐮𝐭𝐩𝐮𝐭 - Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// 2)𝐈𝐧 𝐬𝐭𝐫𝐢𝐜𝐭 𝐦𝐨𝐝𝐞 𝐭𝐡𝐢𝐬 𝐫𝐞𝐭𝐮𝐫𝐧𝐬 𝐮𝐧𝐝𝐞𝐟𝐢𝐧𝐞𝐝 
//  𝑬𝒙𝒂𝒎𝒑𝒍𝒆. 
 'use strict'
 console.log(this)
//  𝐎𝐮𝐭𝐩𝐮𝐭 - undefined

// 3)𝐈𝐧 𝐍𝐨𝐫𝐦𝐚𝐥 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 𝐭𝐡𝐢𝐬 𝐰𝐢𝐥𝐥 𝐫𝐞𝐭𝐮𝐫𝐧 𝐰𝐢𝐧𝐝𝐨𝐰 (𝐠𝐥𝐨𝐛𝐚𝐥) 𝐨𝐛𝐣𝐞𝐜𝐭 𝐰𝐢𝐭𝐡 𝐧𝐨 𝐬𝐭𝐫𝐢𝐜𝐭 𝐦𝐨𝐝𝐞
//  𝑬𝒙𝒂𝒎𝒑𝒍𝒆. 
 function printThis(){
 console.log(this)
 }
//  𝐎𝐮𝐭𝐩𝐮𝐭 - Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// 4)𝐈𝐟 𝐰𝐞 𝐚𝐫𝐞 𝐜𝐚𝐥𝐥𝐢𝐧𝐠 𝐚 𝐧𝐨𝐫𝐦𝐚𝐥 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 𝐰𝐡𝐢𝐜𝐡 𝐢𝐬 𝐢𝐧𝐬𝐢𝐝𝐞 𝐭𝐡𝐞 𝐨𝐛𝐣𝐞𝐜𝐭 𝐚𝐧𝐝 𝐥𝐨𝐠𝐠𝐢𝐧𝐠 𝐭𝐡𝐢𝐬 𝐢𝐧𝐬𝐢𝐝𝐞 𝐭𝐡𝐞 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 𝐭𝐡𝐞𝐧 𝐭𝐡𝐢𝐬 𝐰𝐢𝐥𝐥 𝐫𝐞𝐩𝐫𝐞𝐬𝐞𝐧𝐭 𝐭𝐨 𝐭𝐡𝐚𝐭 𝐨𝐛𝐣𝐞𝐜𝐭 𝐚𝐧𝐝 𝐭𝐡𝐢𝐬 𝐰𝐢𝐥𝐥  𝐫𝐞𝐭𝐮𝐫𝐧 𝐨𝐛𝐣𝐞𝐜𝐭.
// 𝑬𝒙𝒂𝒎𝒑𝒍𝒆. 
let a1 = {
 name: 'anand',
 getName: function(){
 console.log(this)
 }
 }
a1.getName()
// 𝐎𝐮𝐭𝐩𝐮𝐭 - { name: 'anand', getName: [Function: getName] }

// 5)𝐈𝐟 𝐰𝐞 𝐚𝐫𝐞 𝐜𝐚𝐥𝐥𝐢𝐧𝐠 𝐚 𝐚𝐫𝐫𝐨𝐰 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 𝐰𝐡𝐢𝐜𝐡 𝐢𝐬 𝐢𝐧𝐬𝐢𝐝𝐞 𝐭𝐡𝐞 𝐨𝐛𝐣𝐞𝐜𝐭 𝐚𝐧𝐝 𝐥𝐨𝐠𝐠𝐢𝐧𝐠 𝐭𝐡𝐢𝐬 𝐢𝐧𝐬𝐢𝐝𝐞 𝐭𝐡𝐞 𝐚𝐫𝐫𝐨𝐰 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 𝐭𝐡𝐞𝐧 𝐭𝐡𝐢𝐬 𝐰𝐢𝐥𝐥 𝐫𝐞𝐩𝐫𝐞𝐬𝐞𝐧𝐭 𝐭𝐨 𝐰𝐢𝐧𝐝𝐨𝐰 𝐨𝐛𝐣𝐞𝐜𝐭 𝐚𝐧𝐝 𝐭𝐡𝐢𝐬 𝐰𝐢𝐥𝐥 𝐫𝐞𝐭𝐮𝐫𝐧 𝐰𝐢𝐧𝐝𝐨𝐰 𝐨𝐛𝐣𝐞𝐜𝐭.
// The arrow function doesn't have its own so it refers to their enclosing lexical context i.e. where the object is placed in this case it is in the global scope.
// 𝑬𝒙𝒂𝒎𝒑𝒍𝒆 
let a2 = {
 name: 'anand',
 getName: () => console.log(this)
 }
a2.getName()
// 𝐎𝐮𝐭𝐩𝐮𝐭 - Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// 6) 𝐢𝐟 𝐰𝐞 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐢𝐧𝐬𝐢𝐝𝐞 𝐃𝐎𝐌 (𝐇𝐓𝐌𝐋) 𝐭𝐡𝐞𝐧 𝐭𝐡𝐢𝐬 𝐰𝐢𝐥𝐥 𝐫𝐞𝐩𝐫𝐞𝐬𝐞𝐧𝐭 𝐭𝐨 𝐭𝐡𝐚𝐭 𝐩𝐚𝐫𝐭𝐢𝐜𝐮𝐥𝐚𝐫 𝐇𝐓𝐌𝐋 𝐞𝐥𝐞𝐦𝐞𝐧𝐭.
