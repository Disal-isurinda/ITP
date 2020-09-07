import React from 'react';
function vetTask(){
    return(
        <div className="container bg-primary text-white">

            
            <div class="form-group">
                <label for="mortality">mortality Amount:</label>
                <input type="text" class="form-control" id="mrt"/>
            </div>
            
            
            <div class="form-group">

                

                <label for="comment">Comments about batch:</label>
                <textarea class="form-control" rows="5" id="comment"></textarea>
                
            </div>
            
        </div>
        
        
    );
}

export default vetTask;
