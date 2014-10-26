describe('Controller: MainCtrl', function() {
    beforeEach(module('MyApp'));

    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('MainCtrl', {
            $scope: scope
        });

    }));

    it('should have a Heading Title', function() {
        expect(scope.headingTitle).toBe('Top 12 Shows');
    });
    it('should have a Alphabet Array', function() {
        expect(scope.alphabet).toBeDefined();
    });
    it('should have a Genres Array', function() {
        expect(scope.genres).toBeDefined();
    });
    it('should have a Panels Array', function() {
        expect(scope.panels).toBeDefined();
    });
    it('should have a Shows Array', function() {
        expect(scope.shows).toBeDefined();
    });
});
