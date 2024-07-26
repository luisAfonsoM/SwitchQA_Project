## Performance Pipeline Jmeter Artifacts

### Workflows examples:

**Workflow description:** The workflow was initiated with an initial value of 2500 users in the Dynamic Users Loop, and the DDDForum.jmx Thread Group was configured to run only once. Consequently, the test concluded in 44 minutes and 23 seconds, achieving a success rate of 69%. This led to the termination of the loop and the subsequent upload of artifact results. 

[Successfull Run](https://github.com/Departamento-de-Engenharia-Informatica/switch-qa-23-project-switch-qa-23-2/actions/runs/7153109538)


**Workflow description:** The workflow initiated with an initial value of 250 users, incrementing by 50 users until the success rate dropped below 75% in the Dynamic Users Loop. The DDDForum.jmx Thread Group was configured to run three times during each loop iteration. However, GitHub interrupted the test at 6h 0m 15s. According to the logs, the interruption occurred while completing the iteration with 550 users, which had a 100% success rate at that moment. As a result, no artifact results were uploaded.

[Failed Run](https://github.com/Departamento-de-Engenharia-Informatica/switch-qa-23-project-switch-qa-23-2/actions/runs/7147521727)


**Workflow description:** The workflow was set to run a single test with 4000 users. The DDDForum.jmx Thread Group was configured to run three times. The test was completed in 4h 40m 0s, and presented a success rate of 83%. The artifact results were uploaded.

[4000 Users Run](https://github.com/Departamento-de-Engenharia-Informatica/switch-qa-23-project-switch-qa-23-2/actions/runs/7151318509)

**The complete log of the performance pipeline can be found below, where, at the moment, it stands at 93 workflow runs:** 

[Workflow Runs](https://github.com/Departamento-de-Engenharia-Informatica/switch-qa-23-project-switch-qa-23-2/actions/workflows/jmeterpipe.yml)