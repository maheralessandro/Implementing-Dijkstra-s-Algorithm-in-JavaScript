const graph = {
    'A': { 'B': 4, 'C': 2 },

    'B': { 'A': 4, 'C': 5, 'D': 10 },
 
    'C': { 'A': 2, 'B': 5, 'D': 3 },
 
    'D': { 'B': 10, 'C': 3 }
}

function dijkstra(graph, start){
    let visited = new Set() ;
    let distances = {} ;

    let nodes = Object.keys(graph)


    console.log(nodes);

    for (let node of nodes) {
        distances[node] = Infinity;
    }

    distances[start] = 0;

    while (nodes.length) {
        
        nodes.sort((a, b) => distances[a] - distances[b]);
        let closestNode = nodes.shift();

        
        if (distances[closestNode] === Infinity) break;

        
        visited.add(closestNode);

        
        for (let neighbor in graph[closestNode]) {
            
            if (!visited.has(neighbor)) {
                
                let newDistance = distances[closestNode] + graph[closestNode][neighbor];
                
                
                if (newDistance < distances[neighbor]) {
                    
                    distances[neighbor] = newDistance;
                }
            }
        }
    }

    
    return distances;
}





console.log(dijkstra(graph,"A"));