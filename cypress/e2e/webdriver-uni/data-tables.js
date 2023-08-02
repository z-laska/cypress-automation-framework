/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })

    it("Calculate and assert the total age of all users", () => {
        var userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text()
        }).then(() => {
            var i
            for(i = 0; i < userDetails.length; i++) {
                if(Number(userDetails[i])) {
                    numb += Number(userDetails[i])
                }
                // cy.log(userDetails[i])
            }
            cy.log("Found total age: " + numb)
            expect(numb).to.eq(322)
        })
    });

    it('Calculate and assert the total age - my method v1', () => {
        let total = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            const number = Number($el.text())
            if(number) {
                total += number
            }
        }).then(() => {
            expect(total).to.eq(322)
        })
    });
    
    it('Calculate and assert the total age - my method v2', () => {
        let total = 0;
        cy.get('#thumbnail-1 tr td:nth-child(3)').each(($el, index, $list) => {
                total += Number($el.text())
        }).then(() => {
            expect(total).to.eq(322)
        })
    });

    it("Calculate and assert the age of a given user based on last name", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes("Woods")){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                    const userAge = age.text();
                    expect(userAge).to.equal('80')
                })
            }
        })
    });

    it("Calculate and assert the age of a given user based on last name - my method", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes("Woods")){
                cy.wrap($el).next().then((age) => {
                    const userAge = age.text();
                    expect(userAge).to.equal('80')
                })
            }
        })
    });

  
  });
  