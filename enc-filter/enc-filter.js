(function() {
    tinymce.create('tinymce.plugins.wptcp_enc', {
        init : function(bar, url) {
            bar.addButton('encout', {
                title : 'Encode Selected Text',
                cmd : 'encout',
                image : url + '/img.jpg'
            });
 
            bar.addCommand('encout', function() {
				var j = tinyMCE.activeEditor.selection.getContent({ format: 'text' });
				var z = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
				var x = "cmvyqohagtkizxbjunflsdwerpXNEBJLSZOGPRACYQFMUTHWDVIK";
				var o = '';
				var i;
				$open=false;
				for(i=0; i<j.length; i++) {
					var v = j.charAt(i);
					
					if(v=='>')
						{
							$open=false;
							o += v;
							continue;
						}
					if(v=='<')
					{
						$open = true;
					}
					if($open==true)
					{
						o += v;
						continue;
					}
					var index = z.indexOf(v); 
					if(index >= 0 && index < x.length) {
					o += x.charAt(index);
					} else 
					{o += v;}
				}
				
				o = o.replace(/\n/g,"</p><p class=enc_output>");
				
				
				o= o.replace(/<p class=enc_output><\/p>/g,"");

				tinymce.activeEditor.execCommand('mceInsertContent', false, "<p class=enc_output>" + o + "</p>");
            });;
 
        },
 
        createControl : function(n, cm) {
            return null;
        },

        getInfo : function() {
            return {
                longname : 'True Copy Protection Plugin for Wordpress',
                author : 'WPPluginz',
                authorurl : 'http://securebit.xyz/wp',
                infourl : 'http://securebit.xyz/wp',
                version : "1.0"
            };
        }
    });
	
    tinymce.PluginManager.add( 'wptcp_enc', tinymce.plugins.wptcp_enc );
})();