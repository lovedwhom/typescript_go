// window.foo = 1
// Property 'foo' does not exist on type 'Window & typeof globalThis'
// 此时我们可以使用as any临时将window 断言为any类型
window.foo = 1;
