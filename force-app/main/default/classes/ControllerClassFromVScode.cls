public with sharing class ControllerClassFromVScode {
    
    @auraEnabled(cacheable = true)
    public static list<Opportunity> GetOppRecords(){
        return[Select Name, Amount, CloseDate, Probability, StageName From Opportunity];
    }
}