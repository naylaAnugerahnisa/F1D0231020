import os
from mpi4py import MPI
from math import ceil
comm = MPI.COMM_WORLD

home_dir = os.path.expanduser('~')

d = [i for i in range(1,100,2)] 
i = ceil(len(d)/comm.size) 
j = comm.rank*i 

if (j+i)>=len(d):
    k = len(d) 
else:
    k = j+i 

if comm.rank % 2== 0:
    print("Anda Proses Genap")
elif comm.rank % 2== 1:
    print("Anda Proses Ganjil")
else:
    print("Error")
    
print(comm.rank,"mengerjakan %d %d" % (j,k),
      d[j:k],len(d[j:k]),"of",len(d), "(%s)" % home_dir)