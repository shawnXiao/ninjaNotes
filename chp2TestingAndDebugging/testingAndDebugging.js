(function () {
    /*
     *在进行跨浏览器的Javascript开发的时候，一个对全部代码的测试是至关重要的。
     *在这一章主要讲了关于Javascript代码的调试和测试的相关知识。
     */
    /*
     * 好的测试包含了下面三个重要的特征：
     *    可重复性：我们的测试结果应该具有高度的可重现性。测试可以进行重复的进行
     *              并且产生同样的结果。
     *    简洁性：我们的测试应该专注于测试这么一件事。
     *    独立性：我们的测试应该是单独运行的。应该尽量使我们的结果不依赖于其他的测试。
     *创建测试的两种主要方法(不懂)：
     *    Deconstructive test cases
     *    Constructive test cases
     */

     //一个测试框架应该是你开发流程的一个基础设施。一个javascript测试框架应该满足一个简单的
     //需求：显示测试的结果，便于快速的知道哪些测试通过哪些失败。
    //下面是一个基本的测试框架
    //在下面的框架中有三个公共的方法:test(), pause(), 和resume().

    var queue, paused, results;

    queue = [];
    paused = false;

    //可以让一个函数包含有多个的assertions，它既可以同步的运行也可以异步执行，可以放在一个
    //执行队列里面进行等候。
    this.test = function (name, fn) {
        queue.push(function () {
            results = document.getElementById("results");
            results = assert(true, name).appendChild(
                document.createElement("ul")
            );
            fn();
        });
        runTest();
    };

    //在一个test函数里面进行调用，告诉测试框架暂停执行直到test group完成。
    this.pause = function () {
        paused = true;
    };

    //继续执行测试，在一小段间隔后开始下一段测试。
    this.resume = function () {
        paused = false;
        setTimeout(runTest, 1);
    };
    
    function runTest() {
        if (!paused && queue.length) {
            queue.shift()();

            if (!paused) {
                resume();
            }
        }
    }

    this.assert = function assert(value, desc) {
        var li;

        li = document.createElement("li");
        li.className = value ? "pass" : "fail";
        li.appendChild(document.createTextNode(desc));
        results.appendChild(li);

        if (!value) {
            li.parentNode.parentNode.className = "fail";
        }

        return li;
    };
}());
/*
 *Testing code
 *window.onload = function () {
 *    test("Async Test #1", function () {
 *        pause();
 *        setTimeout(function () {
 *            assert(true, "First test completed");
 *            resume();
 *        }, 1000);
 *    });
 *    test("Async Test #2", function () {
 *        pause();
 *        setTimeout(function () {
 *            asset(true, "Second test completed");
 *            resume();
 *        }, 1000);
 *    });
 *}
 */
