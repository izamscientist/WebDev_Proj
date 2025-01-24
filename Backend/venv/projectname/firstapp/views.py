from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import CruiseTrip
from .serializers import CruiseTripSerializer

def index(request):
    return HttpResponse('<h1>Hello World</h1>')

@api_view(['GET', 'POST'])
def cruisetrips_list(request):
    if request.method == 'GET':
        cruisetrips = CruiseTrip.objects.all()
        serializer = CruiseTripSerializer(cruisetrips, context={'request': request}, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CruiseTripSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def cruisetrip_detail(request, pk):
    try:
        cruisetrip = CruiseTrip.objects.get(pk=pk)
    except CruiseTrip.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = CruiseTripSerializer(cruisetrip, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        cruisetrip.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
