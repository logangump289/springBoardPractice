const pi = 3.14159;

// You can reassign with both var and let. However, you can only redeclare with var, and not with let.
// You can access a hoisted variable with var. Let creates block scope.

// While var can be reassigned and redeclared, you can't do either with const. Const is a block scope, and var is a hoisted variable.

// let can be reassigned. Const cannot be reassigned.

// It’s the way that we explain how the JS compiler works. Variables are lifting or “hoisted” to the top of the scope they are declared in. When using var, you can access the variable name and it’s undefined value before it is used later on.