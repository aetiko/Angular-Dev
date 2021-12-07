# Angular-Dev
/**
 * Component based framework
 * clean seperation of template coding and application logic
 * built in support for data-binding and dependency injection
 * Supports resposive web design and mordern frameworks
 *  (bootstap, google material design angular material design and others)
 */

/**
 * Key terms
 * 
 * component - main player in an angular application
 * - view for user interface
 * - class that contains application logic/event handling for the view
 * 
 * view template - the user interface for the component
 * static HTML with dynamic elements
 * 
 * Directive - adds custom behavior to the HTML elements
 * - used for looping, conditionals etc
 * 
 * Service - helper class that provides desired functionality
 * - retrieving data from a server, performing a calculation, validation etc
 * 
 * Module - a collection of related components, directives, services etc
 
# Installation 
- Visual studio code
- node 
- npm
- tsc

# Compilation for Typescript files
tsc <filename>.ts

- Error??/
tsc : File C:\Users\nurud\AppData\Roaming\npm\tsc.ps1 cannot be loaded because running scripts is disabled on this system.

- To fix
Open Powershell as Admin

Then type : set-executionpolicy remotesigned

And select option : A 

 Click enter

# Run the code 
node <filename>.ts
