(function () {
    //函数在javascript中起了关键:
    //function is the primary modular unit of execution
    /*
     *In pages having their three primay components: structure, style and behavior,
     *nicely partitioned into their own location. Structure is defined in the document
     *markup, style in <style> elements or external stylesheets, and behavior in <script>
     *blocks or external script files.
     */
     /*
      *It's importang to note that the browser event loop is single-threaded.Every 
      *event tath is placed into the event queue is handled int the order that it 
      *is placed onto the queue. This is known as a FIFO list, or perhaps a silo
      *to the old-times.Each event is processed in its own "turn" and all other 
      *events have to wait until the current event's turn is over.Under no circumstances
      *are two handlers executing simulaneously in separate threads.
      */
      /*
       *Callback
       *  Whenever we set up a function for something else to call at a later time,
       *  be it the browser or other code, we are setting up what is termed a
       *  callback.
       */
/*
 *       Declarations
 *        JavaScript functions are declare using a function literal that creates a 
 *        function value in the same way taht a numeric literal creates a numeric
 *        value.Remember that, as first class objects, functions are values that 
 *        can be used in the language just like oterh values such as string and 
 *        number.
 *
 *
 *        Function literals are composed of four parts:
 *            the function keyword.
 *
 *            An optional name that, if specified, must be a valid JavaScript identifier
 *
 *            A comma-separated list of parameter names enclosed in parentheses;
 *            the names must be valid identifier and the list can be empty.The 
 *            parentheses must always be present, even with an empty parameter list
 *
 *            The body of the function as a series of JavaScript statements 
 *            enclosed in braces.The body can be empty, but the braces must always
 *            be present
 *
 *        When a function is named, that name is valid throughout the scope within 
 *        which the function is declared.
 *        All function have a property named name that sotes its name as a string.
 *        Function with no name still possess this propetry, set to the empty string
 *
 */
        function isNimble() {
            return true;
        }

        assert(typeof window.isNimble === 'function', 
              'isNimble() defined');
        assert(isNimble.name === 'isNimble',
              'isNimble() has a name');

        //An anonymous function is created and assigned to a global variable
        //named canFly.Because of JavaScript's functional nature, the function
        //can be invoked through this reference as canFly().In this respect
        //it is almost functionally equivalent(no pun intended) to declaring
        //a named function named "canFly", but not quite. One major difference:
        //the function's name property is '', not "canFly"
        var canFly = function () {
            return true;
        }

        assert(typeof window.canFly === 'function', 
              'canFly() defined');
        assert(canFly.name === '',
              'isNimble() has no name');

        window.isDeadly = function () {
            return true;
        }

        assert(typeof window.isDeadly === 'function',
              'isDeadly() defined');

        function outer() {
            assert(typeof inner === 'function',
                  'inner() in scope before declaration');
            function inner() {

            }
            assert(typeof inner === 'function',
                  'inner() in scope after declaration');
            assert(typeof window.inner === 'function',
                  'isDeadly() not in global scope');
        }
        // When we declare a function, not only do we need to be concerned with
        // the scope within which that function is avaiable, but also what scopes
        // the function itself creates, and how declarations within the function
        // are affected by those scopes.

        /*
         *There are actually foru different ways to invoke a function, each with
         *their own nuances.They are:
         *    As a function, in which the function is invoked in a straightforward
         *manner.
         *    As a method, which ties the invocation to an object, enabling 
         *object-oriented programming.
         *    As a constructor, in whicha new object is brought into being.
         *    Via their apply() or call() methods, which , well, is kind of complicated,
         *so we'll take that when we get to it.
         */

/*
 *         All function area also passed two implicit parameters: arguments and this
 *         By implict, we mean that these parameters are not explicitly listed in 
 *         the function signature, but that they are silently passed to the function,
 *         and in scope within the function.Thus, they can be referenced within
 *         the function just like any other explicity named parameter.
 *
 *         Note: we went out of our way to avoid calling the arguments parameter an
 *               array.
 */
        function creep() {
            return this;
        }

        assert(creep() === window, "Creeping in the window");

        var sneak = creep;

        assert(sneak() === window, "Sneaking in the window");

        var ninja1 = {
            skulk: creep
        };

        //when we invoke the function via a method reference, we expect the 
        //function context to be the method's object
        assert(ninja1.skulk() ==== ninja1, "The 1st ninja is skulking");

        var ninja2 = {
            skulk: creep
        };

        assert(ninja2.skulk() ==== ninja1, "The 2ed ninja is skulking");
        //Note: even though the same function is used throughout all these 
        //examples, that the function context for each invocation of the 
        //function chages depending upon how the function is invoked, rather
        //than on how it declared

/*
 *        When a constructor is invoked, the following special actions take place:
 *            A new empty object is created
 *
 *            This object is passed to the constructor as the this parameter, and
 *            thus becomes the constructor's functon context
 *
 *            In the absence of any explicit return value, the new object is 
 *            returned as the constructor's value.
 *
 */
    function Ninja() {
        this.skulk = function () {
            return this;
        }
    }

    //Note that the returned values from the invocations are stored in variables 
    //that become references to the newly created Ninjas.
    var ninja3 = new Ninja();
    var ninja4 = new Ninja();
    assert(ninja3,skulk === ninja3, 'The 3ed ninja is skulking');
    assert(ninja4,skulk === ninja4, 'The 4th ninja is skulking');

    //Building a for-each function to demonstrate setting an arbitrary function
    //context
    function forEach(list, callback) {
        var n, len;
        n = 0;
        len = list.length;
        for (; n < len; n++) {
            //This should cause the current entry become the function context,
            //and the index to be passed as the single parameter to this
            //callback
            Callback.call(list[n], n);
        }
    }

    var list = ['shuriken', 'katana', 'nunchucks'];

    forEach(list, function (index) {
        console.log(index);
        console.log(this);
        assert(this == list[index], "Got the excepted value of " + list[index]);
    });
}());
