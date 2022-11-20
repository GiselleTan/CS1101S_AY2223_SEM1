////////////////////////////////////////////////////////////////////
//QUEST 14: LOGICAL! (XP: 451 / 500)

//Q14, TASK 1
process_query(`assert(address(list("Bitdiddle", "Ben"),
                              list("Slumerville", list("Ridge", "Road"), 10)))`);
process_query(`assert(job(list("Bitdiddle", "Ben"), 
                          list("computer", "wizard")))`);
process_query(`assert(salary(list("Bitdiddle", "Ben"), 122000))`);

process_query('assert(address(list("Hacker", "Alyssa", "P"), list("Cambridge", list("Mass", "Ave"), 78)))');
process_query('assert(job(list("Hacker", "Alyssa", "P"), list("computer", "programmer")))');
process_query('assert(salary(list("Hacker", "Alyssa", "P"), 81000))');
process_query('assert(supervisor(list("Hacker", "Alyssa", "P"), list("Bitdiddle", "Ben")))');

process_query('assert(address(list("Fect", "Cy", "D"), list("Cambridge", list("Ames", "Street"), 3)))');
process_query('assert(job(list("Fect", "Cy", "D"), list("computer", "programmer")))');
process_query('assert(salary(list("Fect", "Cy", "D"), 70000))');
process_query('assert(supervisor(list("Fect", "Cy", "D"), list("Bitdiddle", "Ben")))');

process_query('assert(address(list("Tweakit", "Lem", "E"), list("Boston", list("Bay", "State", "Road"), 22)))');
process_query('assert(job(list("Tweakit", "Lem", "E"), list("computer", "technician")))');
process_query('assert(salary(list("Tweakit", "Lem", "E"), 51000))');
process_query('assert(supervisor(list("Tweakit", "Lem", "E"), list("Bitdiddle", "Ben")))');

process_query('assert(address(list("Reasoner", "Louis"), list("Slumerville", list("Pine", "Tree", "Road"), 80)))');
process_query('assert(job(list("Reasoner", "Louis"), list("computer", "programmer", "trainee")))');
process_query('assert(salary(list("Reasoner", "Louis"), 62000))');
process_query('assert(supervisor(list("Reasoner", "Louis"), list("Hacker", "Alyssa", "P")))');

process_query('assert(supervisor(list("Bitdiddle", "Ben"), list("Warbucks", "Oliver")))');

process_query('assert(address(list("Warbucks", "Oliver"), list("Swellesley", list("Top", "Heap", "Road"))))');
process_query('assert(job(list("Warbucks", "Oliver"), list("administration", "big", "wheel")))');
process_query('assert(salary(list("Warbucks", "Oliver"), 314159))');

process_query('assert(address(list("Scrooge", "Eben"), list("Weston", list("Shady", "Lane"), 10)))');
process_query('assert(job(list("Scrooge", "Eben"), list("accounting", "chief", "accountant")))');
process_query('assert(salary(list("Scrooge", "Eben"), 141421))');
process_query('assert(supervisor(list("Scrooge", "Eben"), list("Warbucks", "Oliver")))');

process_query('assert(address(list("Cratchit", "Robert"), list("Allston", list("N", "Harvard", "Street"), 16)))');
process_query('assert(job(list("Cratchit", "Robert"), list("accounting", "scrivener")))');
process_query('assert(salary(list("Cratchit", "Robert"), 26100))');
process_query('assert(supervisor(list("Cratchit", "Robert"), list("Scrooge", "Eben")))');

process_query('assert(address(list("Aull", "DeWitt"), list("Slumerville", list("Onion", "Square"), 5)))');
process_query('assert(job(list("Aull", "DeWitt"), list("administration", "assistant")))');
process_query('assert(salary(list("Aull", "DeWitt"), 42195))');
process_query('assert(supervisor(list("Aull", "DeWitt"), list("Warbucks", "Oliver")))');

process_query('assert(can_do_job(list("computer", "wizard"), list("computer", "programmer")))');
process_query('assert(can_do_job(list("computer", "wizard"), list("computer", "technician")))');

process_query('assert(can_do_job(list("computer", "programmer"), list("computer", "programmer", "trainee")))');

process_query('assert(can_do_job(list("administration", "assistant"), list("administration", "big", "wheel")))');

const my_query = `
  supervisor($x, list(\"Bitdiddle\", \"Ben\"))
`;

process_query(my_query);

// Expected result

// "supervisor(list(\"Tweakit\", \"Lem\", \"E\"), list(\"Bitdiddle\", \"Ben\"))"
// "supervisor(list(\"Fect\", \"Cy\", \"D\"), list(\"Bitdiddle\", \"Ben\"))"
// "supervisor(list(\"Hacker\", \"Alyssa\", \"P\"), list(\"Bitdiddle\", \"Ben\"))"







////////////////////////////////////////////////////
//Q14, TASK 2
process_query(`assert(address(list("Bitdiddle", "Ben"),
                              list("Slumerville", list("Ridge", "Road"), 10)))`);
process_query(`assert(job(list("Bitdiddle", "Ben"), 
                          list("computer", "wizard")))`);
process_query(`assert(salary(list("Bitdiddle", "Ben"), 122000))`);

process_query('assert(address(list("Hacker", "Alyssa", "P"), list("Cambridge", list("Mass", "Ave"), 78)))');
process_query('assert(job(list("Hacker", "Alyssa", "P"), list("computer", "programmer")))');
process_query('assert(salary(list("Hacker", "Alyssa", "P"), 81000))');
process_query('assert(supervisor(list("Hacker", "Alyssa", "P"), list("Bitdiddle", "Ben")))');

process_query('assert(address(list("Fect", "Cy", "D"), list("Cambridge", list("Ames", "Street"), 3)))');
process_query('assert(job(list("Fect", "Cy", "D"), list("computer", "programmer")))');
process_query('assert(salary(list("Fect", "Cy", "D"), 70000))');
process_query('assert(supervisor(list("Fect", "Cy", "D"), list("Bitdiddle", "Ben")))');

process_query('assert(address(list("Tweakit", "Lem", "E"), list("Boston", list("Bay", "State", "Road"), 22)))');
process_query('assert(job(list("Tweakit", "Lem", "E"), list("computer", "technician")))');
process_query('assert(salary(list("Tweakit", "Lem", "E"), 51000))');
process_query('assert(supervisor(list("Tweakit", "Lem", "E"), list("Bitdiddle", "Ben")))');

process_query('assert(address(list("Reasoner", "Louis"), list("Slumerville", list("Pine", "Tree", "Road"), 80)))');
process_query('assert(job(list("Reasoner", "Louis"), list("computer", "programmer", "trainee")))');
process_query('assert(salary(list("Reasoner", "Louis"), 62000))');
process_query('assert(supervisor(list("Reasoner", "Louis"), list("Hacker", "Alyssa", "P")))');

process_query('assert(supervisor(list("Bitdiddle", "Ben"), list("Warbucks", "Oliver")))');

process_query('assert(address(list("Warbucks", "Oliver"), list("Swellesley", list("Top", "Heap", "Road"))))');
process_query('assert(job(list("Warbucks", "Oliver"), list("administration", "big", "wheel")))');
process_query('assert(salary(list("Warbucks", "Oliver"), 314159))');

process_query('assert(address(list("Scrooge", "Eben"), list("Weston", list("Shady", "Lane"), 10)))');
process_query('assert(job(list("Scrooge", "Eben"), list("accounting", "chief", "accountant")))');
process_query('assert(salary(list("Scrooge", "Eben"), 141421))');
process_query('assert(supervisor(list("Scrooge", "Eben"), list("Warbucks", "Oliver")))');

process_query('assert(address(list("Cratchit", "Robert"), list("Allston", list("N", "Harvard", "Street"), 16)))');
process_query('assert(job(list("Cratchit", "Robert"), list("accounting", "scrivener")))');
process_query('assert(salary(list("Cratchit", "Robert"), 26100))');
process_query('assert(supervisor(list("Cratchit", "Robert"), list("Scrooge", "Eben")))');

process_query('assert(address(list("Aull", "DeWitt"), list("Slumerville", list("Onion", "Square"), 5)))');
process_query('assert(job(list("Aull", "DeWitt"), list("administration", "assistant")))');
process_query('assert(salary(list("Aull", "DeWitt"), 42195))');
process_query('assert(supervisor(list("Aull", "DeWitt"), list("Warbucks", "Oliver")))');

process_query('assert(can_do_job(list("computer", "wizard"), list("computer", "programmer")))');
process_query('assert(can_do_job(list("computer", "wizard"), list("computer", "technician")))');

process_query('assert(can_do_job(list("computer", "programmer"), list("computer", "programmer", "trainee")))');

process_query('assert(can_do_job(list("administration", "assistant"), list("administration", "big", "wheel")))');

const my_query = `
  job($x, pair("accounting", $type))
`;

process_query(my_query);

// Expected result

// "supervisor(list(\"Tweakit\", \"Lem\", \"E\"), list(\"Bitdiddle\", \"Ben\"))"
// "supervisor(list(\"Fect\", \"Cy\", \"D\"), list(\"Bitdiddle\", \"Ben\"))"
// "supervisor(list(\"Hacker\", \"Alyssa\", \"P\"), list(\"Bitdiddle\", \"Ben\"))"






////////////////////////////////////////////////////
//Q14, TASK 3
process_query(`assert(address(list("Bitdiddle", "Ben"),
                              list("Slumerville", list("Ridge", "Road"), 10)))`);
process_query(`assert(job(list("Bitdiddle", "Ben"), 
                          list("computer", "wizard")))`);
process_query(`assert(salary(list("Bitdiddle", "Ben"), 122000))`);

process_query('assert(address(list("Hacker", "Alyssa", "P"), list("Cambridge", list("Mass", "Ave"), 78)))');
process_query('assert(job(list("Hacker", "Alyssa", "P"), list("computer", "programmer")))');
process_query('assert(salary(list("Hacker", "Alyssa", "P"), 81000))');
process_query('assert(supervisor(list("Hacker", "Alyssa", "P"), list("Bitdiddle", "Ben")))');

process_query('assert(address(list("Fect", "Cy", "D"), list("Cambridge", list("Ames", "Street"), 3)))');
process_query('assert(job(list("Fect", "Cy", "D"), list("computer", "programmer")))');
process_query('assert(salary(list("Fect", "Cy", "D"), 70000))');
process_query('assert(supervisor(list("Fect", "Cy", "D"), list("Bitdiddle", "Ben")))');

process_query('assert(address(list("Tweakit", "Lem", "E"), list("Boston", list("Bay", "State", "Road"), 22)))');
process_query('assert(job(list("Tweakit", "Lem", "E"), list("computer", "technician")))');
process_query('assert(salary(list("Tweakit", "Lem", "E"), 51000))');
process_query('assert(supervisor(list("Tweakit", "Lem", "E"), list("Bitdiddle", "Ben")))');

process_query('assert(address(list("Reasoner", "Louis"), list("Slumerville", list("Pine", "Tree", "Road"), 80)))');
process_query('assert(job(list("Reasoner", "Louis"), list("computer", "programmer", "trainee")))');
process_query('assert(salary(list("Reasoner", "Louis"), 62000))');
process_query('assert(supervisor(list("Reasoner", "Louis"), list("Hacker", "Alyssa", "P")))');

process_query('assert(supervisor(list("Bitdiddle", "Ben"), list("Warbucks", "Oliver")))');

process_query('assert(address(list("Warbucks", "Oliver"), list("Swellesley", list("Top", "Heap", "Road"))))');
process_query('assert(job(list("Warbucks", "Oliver"), list("administration", "big", "wheel")))');
process_query('assert(salary(list("Warbucks", "Oliver"), 314159))');

process_query('assert(address(list("Scrooge", "Eben"), list("Weston", list("Shady", "Lane"), 10)))');
process_query('assert(job(list("Scrooge", "Eben"), list("accounting", "chief", "accountant")))');
process_query('assert(salary(list("Scrooge", "Eben"), 141421))');
process_query('assert(supervisor(list("Scrooge", "Eben"), list("Warbucks", "Oliver")))');

process_query('assert(address(list("Cratchit", "Robert"), list("Allston", list("N", "Harvard", "Street"), 16)))');
process_query('assert(job(list("Cratchit", "Robert"), list("accounting", "scrivener")))');
process_query('assert(salary(list("Cratchit", "Robert"), 26100))');
process_query('assert(supervisor(list("Cratchit", "Robert"), list("Scrooge", "Eben")))');

process_query('assert(address(list("Aull", "DeWitt"), list("Slumerville", list("Onion", "Square"), 5)))');
process_query('assert(job(list("Aull", "DeWitt"), list("administration", "assistant")))');
process_query('assert(salary(list("Aull", "DeWitt"), 42195))');
process_query('assert(supervisor(list("Aull", "DeWitt"), list("Warbucks", "Oliver")))');

process_query('assert(can_do_job(list("computer", "wizard"), list("computer", "programmer")))');
process_query('assert(can_do_job(list("computer", "wizard"), list("computer", "technician")))');

process_query('assert(can_do_job(list("computer", "programmer"), list("computer", "programmer", "trainee")))');

process_query('assert(can_do_job(list("administration", "assistant"), list("administration", "big", "wheel")))');

const my_query = `
  address($x, pair("Slumerville", $type))
`;

process_query(my_query);

// Expected result

// "supervisor(list(\"Tweakit\", \"Lem\", \"E\"), list(\"Bitdiddle\", \"Ben\"))"
// "supervisor(list(\"Fect\", \"Cy\", \"D\"), list(\"Bitdiddle\", \"Ben\"))"
// "supervisor(list(\"Hacker\", \"Alyssa\", \"P\"), list(\"Bitdiddle\", \"Ben\"))"






////////////////////////////////////////////////////
//Q14, TASK 4 (80 / 200 XP)
process_query(`assert(
    rule(same($x, $x)))`);
    
    process_query(`assert(
    rule(member($x, $rest_y, $rest_y), 
        and(member($x, pair($y, $rest_y), $rest_y),
        same($x, $y)))
                 )`);
    
    process_query(`assert(
    rule(member($x, null, null))		     
    )`);
    
    process_query(`assert(
    rule(member($x, pair($y, $rest_y), pair($x, $rest_y)), same($x, $y))
    )`);
    
    // TESTING
         
    // first_answer(`member("a", list("a", "b", "c", "d"), $zs)`);
    // first_answer(`member("c", list("a", "b", "c", "d"), $zs)`);
    // first_answer(`member("e", list("a", "b", "c", "d"), $zs)`);
    // first_answer(`member($x, list("a", "b", "c", "d"), 
    //                         list("a", "b", "c", "d"))`);
    // first_answer(`member($x, list("a", "b", "c", "d"), 
    //                         list("c", "d"))`);

    //DID NOT PASS ALL TESTCASES