/**
 * Mithril-Checkbox
 * Create new checkboxes that work perfectly with Mithril
 * @author Araby Alhomsi
 * @version 0.0.1
 * 
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Araby Alhomsi
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function(name, context, definition){
    'use strict';

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else if (typeof define === 'function' && define.amd) {
        define(definition);
    } else {
        context[name] = definition();
    }

})('mCheckbox', this, function(){
    'use strict';

    var mCheckbox = {

        controller: function (args) {
            var ctrl = this;
            args = args || {};

            ctrl.ifChecked = args.valueProp || m.prop(false);


            ctrl.beChecked = function (e) {
                var input,
                    checkValue;

                if (e.target.nodeName == 'DIV' || e.target.nodeName == 'I' ) {
                    input = e.target.getElementsByTagName('input')[0];
                    checkValue = true;
                }else if (e.target.nodeName == "INPUT") {
                    input = e.target;
                    checkValue = false;
                }
                
                if (input.checked == checkValue) {                
                    input.checked = false;
                    ctrl.ifChecked(false);

                    if (args.pushToArray && args.pushToArray != false) {
                        var removeIndex = args.pushToArray().indexOf(args.name);
                        args.pushToArray().splice(removeIndex, 1);
                    }
                }else{
                    input.checked = true;
                    ctrl.ifChecked(true);

                    if (args.pushToArray && args.pushToArray != false) {
                        args.pushToArray().push(args.name);
                    }
                }

                if (args.onclick) {
                    args.onclick();
                }
            };
        },


        view: function (ctrl, args) {
            args = args || {};

            return m('div', {class: "check-box" + ( ctrl.ifChecked() ? " checkedBox" : ""), onclick: ctrl.beChecked.bind(this),}, [
                m('i', {class:args.iconClass}, [
                    m('input', {type:'checkbox',name:args.name,id:args.name,class:'hiddenInput'})
                ])
            ]);
        }
    };

    return mCheckbox;
});