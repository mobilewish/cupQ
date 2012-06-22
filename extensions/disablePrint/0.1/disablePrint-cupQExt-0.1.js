/* disablePrint (Extension for cupQ -  v0.2+ )-v0.1- MIT License (MIT)-Uncompressed - Samir Dash, 2012 mobilewish@gmail.com http://samirshomepage.wordpress.com */

				var disablePrintExt = function(selector, targetNode, indexQueryResultingArray){
				
				var thisCupQ = _(selector, targetNode, indexQueryResultingArray);
				thisCupQ.setDebug(true);
				
				thisCupQ.onDocumentReady=function(){
				thisCupQ.init();
				

						var disablePrintPlugin = {
							init:function(){
							var h=document.getElementsByTagName("head")[0];
							var s=document.createElement("style");
							s.innerHTML = "*{display: none !important;}";
							s.setAttribute("type","text/css");
							s.setAttribute("media","print");
							s.setAttribute
							h.appendChild(s);
							
											return(true);
										},
											
											
							getInfo : {
											
														
													longName : 	'disablePrint - Extension for cupQ ',
													author : 	'Samir Dash',
													authorURL : 'http://samirshomepage.wordpress.com',
													infoURL : 	'http://github.com/mobilewish/cupQ/extensions/disablePrint',
													version : 	'1.0'
										   
									}			
											
							}
							
							
							
							
				thisCupQ.pluginManager.register("disablePrint", disablePrintPlugin); 
				thisCupQ.disablePrint.init();
					
					
					
					
						
					}
				
				};		
				
				disablePrintExt();


