/**
 * Create new checkboxes that work perfectly with Mithril
 * @author Araby Alhomsi
 */

/**
 * [mCheckbox description]
 * @type {Object}
 * @example
 * m.component(CheckboxComponent, {
 *     name: 'Reception', // the value that will be put in the array
 *     pushToArray: ctrl.unitAmenities, // the values array
 *     valueProp: ctrl.checkedOne, // if you don't want an array, you can use an `m.prop()`
 * })
 */
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

            if (args.onchange) {
                args.onchange();
            }
        };
    },


    view: function (ctrl, args) {
        args = args || {};

        return m('div', {class: "check-box " + ( ctrl.ifChecked() ? "checkedBox" : ""), onclick: ctrl.beChecked.bind(this),}, [
            m('i', {class:'ion-android-done'}, [
                m('input', {type:'checkbox',name:args.name,id:args.name})
            ])
        ]);

        /** MSX Version */
        /* return (
             <div class={"check-box " + ( ctrl.ifChecked() ? "checkedBox" : "")} onclick={ctrl.beChecked.bind(this)}>
                 <i class="ion-android-done">
                     <input type="checkbox" class="check-box" name={args.name} id={args.name} />
                 </i>
             </div>
             );
        */
    }
};

if (typeof module == 'object' && typeof module.exports == 'object') {
    module.exports = mCheckbox;
}