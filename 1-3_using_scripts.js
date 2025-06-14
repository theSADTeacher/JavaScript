"use strict";
/* 1.3 Evaluate the use of internal and external scripts 
• When to use, how to use, and what happens when scripts are used at  
multiple levels 
 */

/* INTERNAL SCRIPTS 
JavaScript code written directly within <script> tags on the 
HTML file
Use for small scripts or quick prototypes or when external hosting
isn't possible such as email templates and embedded content
Though not recommended, sometimes small inline event handlers can 
be used for simple functionality
Not reusable between pages
Hard to maintain as the code grows
Increases HTML file size and can slow page load
Avoid using these whenever possible
*/

/* EXTERNAL SCRIPTS
JavaScript code stored in a .js file and linked to the HTML using
<script src=""> tag
Use for larger, reusable, or moduluar scripts
Reusable across multiple HTML files
Easier to maintain and update
Better performance as browsers cache external files
*/

/*  MULTIPLE SCRIPTS
When scripts are included at multiple levels, the execution order
matters and potential conflicts can arise.

Scripts are excuted in the order they appear in the HTML file.
If script2.js relies on a variable or function in script1.js, then
script1.js must load first

inline scripts within <script> tags in the HTML file execute at the 
point they are encountered.

if an inline script relies on an external script, the external script
must be loaded before the inline script is executed.

If scripts at different levels (internal and external) modify the same
variables, the last script executed determines the final value
*/
x = 20
/* this can lead to unintended overwrites and bugs 

When multiple scripts declare global variables or funcitons with the 
same name, conflicts will occur. Use block scope (let, const) or
encapusulate code in a function or module to prevent pollution
of the global name space
*/

/*BEST PRACTICES
Use external scripts and minimize gthe use of inline scripts
Load scripts asynchronously  or defer execution by using the asyc or defer 
attributes for external scripts to optimize loading times

    async:  loads the script independently and executes it as soon as its ready
    defer: waits until the HTML is fully parsed the executes in order
Encapsulate code in functions or modules to prevent global namespace pollution
Place essential scripts (like libraries) before dependent scripts
Ensure that the same script is not included multiple times to avoid 
redundancy and potentential conflicts
    */



/* More on ASYNC and DEFER

When <script> is encountered in the HTML file:
 - the browser stops parsing the HTML
 - the browswer downloads the script
 - the browser executes the script
 - the browswer resumes parsing the HTML

 Large or slow-loading scripts can block the rendering of the page making
 the website feel sluggish


 ASYNC ATTRIBUTE
 The browser downloads the script in parallel to parsing the HTML so the 
 script doesn't block the rendering of the page
 Once the script is finished downloading, it is executed immediately and 
 HTML parsing is temporarily paused. 
 HTML parsing resumes after the script is executed

 You get faster initial page rendering because the browser doesn't block
 parsing to wait for the script to load. 
 However, the execution order is unpredictable because scripts are 
 executed as soon as they are ready.  This can cause problems if one 
 script depends on another.

 You want to use async when the script doesn't depend on other scripts
 or on the DOM being fully parsed (for example analytics, tracking scripts,
 social media widgets, and ads).  


 DEFER ATTRIBUTE
 The browser downloads the script in parallel to parsing the HTML so 
 the script isn't blocking the rendering of the page.
 The script is executed only after the THML document has been fully 
 parsed

 These have a predictable execution order and are ideal for scripts
 that rely on the DOM or other scripts being fully available.
 Because these are not executed until the parsing is complete, there
 could be a delay of some functionality if the DOM parsing takes a 
 long time.

 Use this for scripts that need the entire DOM to be parsed before
 they run (for exaple, scripts manipulating the DOM or relying on 
 other scripts)

 KEY DIFFERENCE
 is in when the script is executed. Both download in parallel to parsing 
 the DOM.  Scripts attributed with async will execute as soon as the 
 script finishes downloading while scripts attributed with defer will 
 execute after the DOM completes it s parse.  Async is appropriate for 
 independent scripts and defer is best used for DOM-dependent scripts.

 BEST PRACTICE
 - Use defer for most scripts
 - Use async when the script is independent, self-contained, non-essential
 - Do NOT mix for related scritps.  If script1.js depends on script2.js, 
 don't use async for one and defer for the other because async can execute
 out of order.


 VISUALIZING

<script src="async1.js" async></script>
<script src="defer1.js" defer></script>
<script src="defer2.js" defer></script>
<script src="inline.js"></script>

1. async1, defer1, defer2 start downloading in parallel
2. HTML continues parsing uninterrupted
3. async1 executes when it finishes downloading and the HTML parsing pauses
4. HTML finishes parsing before the defer scripts run
5. inline.js executes where they appear

Inline scripts execute immediately when encountered making them highly 
predictable.
If an async script finishes downloading before an inline script is
encountered, it may execute first. If an inline script is encountered 
while the async script is still downloading, the inline script will 
execute first.
If the DOM is simple or the async script is large or slow, the DOM might 
finish parsing before the async script is fully downloaded.
Deferred scripts always execute after the DOM is fully parsed and in the 
order they appear in the HTML.
The key difference is that defer scripts ALWAYS wait until the DOM is 
parsed.  If the script is interacting with the DOM attributing defer is
often the safest choice. 
*/
