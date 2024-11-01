=== Website True Copy Protection ===

Contributors: 	   wppluginz
Tags: website copy protection, true copy protect, disable copy paste, text encryption, content scramble, stop plagiarism, encrypt webpage, wordpress, wp copy protect, wordpress copy protection
Requires at least: 3.0  
Tested up to: 	   4.9.6  
Stable tag: 	   trunk
License:           GPLv2 or Later
License URI: 	   http://www.gnu.org/licenses/gpl-2.0.html

Adds copy protection technology to wordpress websites.

== Description ==

Please visit the [plugin homepage](http://securebit.xyz/wp) for demo. For premium version write to websecurecontent@protonmail.com

The plugin scrambles/encrypts the selected webpage content in the source code and renders a readable version to the visitors.
After encrypting the contents, one cannot copy contents from Source View, Developer tools or using any plugin or by disabling javascript.
If someone tries to copy the content they will get encrypted content only which is useless.
It is possible to encrypt only parts of the content so that the SEO is not compromised.
The headings, tags, keywords and other site contents need not be encrypted.
It works for all languages and per user font customization is also available for additional price.
A default WordPress font is included with the plugin. An additional font of the customers choice is free to purchase.

= Basic Features (included) =

	1. All basic features of the plugin to encrypt and protect the content are available with no limitation.
	2. Includes WordPress default font to be used on all websites.

= Premium Features (included) =

	1. Per user customization of the plugin
	2. The user gets a font of his choice provided that the font grants license to modify and distribute.

== How it works ==
The plugin creates a tinymce plugin and adds a button to the visual editor to encrypt the content. At render time, the encrypted text is readable.

== Installation ==

###Installing The Plugin###

Extract all files from the ZIP file, making sure to keep the file structure
intact, and then upload it to `/wp-content/plugins/`. Then just visit your
admin area and activate the plugin. That's it!
OR
Upload the zip via plugin manager in WordPress admin dashboard, install and activate.

**See Also:** ["Installing Plugins" article on the WP Codex](http://codex.wordpress.org/Managing_Plugins#Installing_Plugins)

###Using the plugin###

1. While adding or editing a post, an additional button will be visible in the TinyMCE editor(Wordpress editor) toolbar.
2. Type in or paste the content to be published in plain text without any html codes inside the editor window.
3. Select the text you wish to encrypt.
4. Click the button labelled "Encode Selected Text".
5. The content will then be encrypted and the selected text will be replaced with encrypted text.
6. Continue with any other formatting in the text editor.
7. You can publish encrypted and plain text content in the same post. The difference is that plain text can be copied and encrypted cannot be.
8. Select only the plain text you wish to encrypt and then press the "Encode Selected Text" button in the visual editor.
9. Finally after finishing all formatting, publish the post and see the result

### Additional Notes ###
* The encrypted contents MUST be wrapped in "enc_output" class to render properly.
* The button automatically encrypts the text and adds the class.
* Make sure that after completing further edits that the class name is intact by looking in the text mode editor.

== Screenshots ==

== ChangeLog ==

**Version 1.0**

* Initial release

