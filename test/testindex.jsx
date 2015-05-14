//TODO: What is really going on here?
var testContext = require.context('.', true, /Spec.jsx?/);
testContext.keys().forEach(testContext);
