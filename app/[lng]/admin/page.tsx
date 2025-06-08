'use client'

import { useState } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
	Users,
	UserCheck,
	Star,
	MapPin,
	CheckCircle,
	XCircle,
	Eye,
} from 'lucide-react'
import { Header } from '@/components/header'

const stats = [
	{
		title: 'Jami Foydalanuvchilar',
		value: '2,847',
		change: '+12%',
		icon: Users,
	},
	{
		title: 'Faol Ustalar',
		value: '1,234',
		change: '+8%',
		icon: UserCheck,
	},
	{
		title: 'Bajarilgan Buyurtmalar',
		value: '5,678',
		change: '+23%',
		icon: CheckCircle,
	},
	{
		title: "O'rtacha Reyting",
		value: '4.8',
		change: '+0.2',
		icon: Star,
	},
]

const pendingProviders = [
	{
		id: '1',
		name: 'Aziz Rahimov',
		email: 'aziz@example.com',
		service: 'Elektrik',
		location: 'Toshkent',
		appliedDate: '2024-01-15',
		status: 'pending',
	},
	{
		id: '2',
		name: 'Farrux Karimov',
		email: 'farrux@example.com',
		service: 'Santexnik',
		location: 'Samarqand',
		appliedDate: '2024-01-14',
		status: 'pending',
	},
]

const recentOrders = [
	{
		id: '1',
		client: 'Aziz Rahimov',
		provider: 'Ahmad Karimov',
		service: "Elektr Ta'mirlash",
		amount: "75,000 so'm",
		status: 'completed',
		date: '2024-01-15',
	},
	{
		id: '2',
		client: 'Malika Karimova',
		provider: 'Bobur Umarov',
		service: 'Santexnik',
		amount: "120,000 so'm",
		status: 'in-progress',
		date: '2024-01-15',
	},
]

export default function AdminDashboard() {
	const [selectedTab, setSelectedTab] = useState('overview')

	const handleApproveProvider = (id: string) => {
		console.log('Ustani tasdiqlash:', id)
	}

	const handleRejectProvider = (id: string) => {
		console.log('Ustani rad etish:', id)
	}

	return (
		<div className='min-h-screen bg-background'>
			<Header />

			<div className='container py-8'>
				<div className='mb-8'>
					<h1 className='text-3xl font-bold'>Admin Dashboard</h1>
					<p className='text-muted-foreground'>
						UstaTop platformangizni boshqaring
					</p>
				</div>

				<Tabs
					value={selectedTab}
					onValueChange={setSelectedTab}
					className='space-y-6'
				>
					<TabsList className='grid w-full grid-cols-4'>
						<TabsTrigger value='overview'>Umumiy</TabsTrigger>
						<TabsTrigger value='providers'>Ustalar</TabsTrigger>
						<TabsTrigger value='orders'>Buyurtmalar</TabsTrigger>
						<TabsTrigger value='analytics'>Tahlil</TabsTrigger>
					</TabsList>

					<TabsContent value='overview' className='space-y-6'>
						{/* Stats Cards */}
						<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
							{stats.map(stat => {
								const Icon = stat.icon
								return (
									<Card key={stat.title}>
										<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
											<CardTitle className='text-sm font-medium'>
												{stat.title}
											</CardTitle>
											<Icon className='h-4 w-4 text-muted-foreground' />
										</CardHeader>
										<CardContent>
											<div className='text-2xl font-bold'>{stat.value}</div>
											<p className='text-xs text-muted-foreground'>
												<span className='text-green-600'>{stat.change}</span>{' '}
												o'tgan oydan
											</p>
										</CardContent>
									</Card>
								)
							})}
						</div>

						{/* Recent Activity */}
						<div className='grid lg:grid-cols-2 gap-6'>
							<Card>
								<CardHeader>
									<CardTitle>Kutilayotgan Usta Arizalari</CardTitle>
									<CardDescription>
										Yangi xizmat ko'rsatuvchilarni ko'rib chiqing va tasdiqlang
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className='space-y-4'>
										{pendingProviders.map(provider => (
											<div
												key={provider.id}
												className='flex items-center justify-between p-4 border rounded-lg'
											>
												<div className='flex items-center space-x-3'>
													<Avatar>
														<AvatarFallback>
															{provider.name.charAt(0)}
														</AvatarFallback>
													</Avatar>
													<div>
														<p className='font-medium'>{provider.name}</p>
														<p className='text-sm text-muted-foreground'>
															{provider.service} • {provider.location}
														</p>
													</div>
												</div>
												<div className='flex space-x-2'>
													<Button
														size='sm'
														variant='outline'
														onClick={() => handleRejectProvider(provider.id)}
													>
														<XCircle className='h-4 w-4 mr-1' />
														Rad Etish
													</Button>
													<Button
														size='sm'
														onClick={() => handleApproveProvider(provider.id)}
													>
														<CheckCircle className='h-4 w-4 mr-1' />
														Tasdiqlash
													</Button>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>So'nggi Buyurtmalar</CardTitle>
									<CardDescription>
										Eng so'nggi xizmat buyurtmalari va tugallanganlar
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className='space-y-4'>
										{recentOrders.map(order => (
											<div
												key={order.id}
												className='flex items-center justify-between p-4 border rounded-lg'
											>
												<div>
													<p className='font-medium'>{order.service}</p>
													<p className='text-sm text-muted-foreground'>
														{order.client} → {order.provider}
													</p>
													<p className='text-xs text-muted-foreground'>
														{order.date}
													</p>
												</div>
												<div className='text-right'>
													<p className='font-medium'>{order.amount}</p>
													<Badge
														variant={
															order.status === 'completed'
																? 'default'
																: 'secondary'
														}
													>
														{order.status === 'completed'
															? 'Tugallangan'
															: 'Jarayonda'}
													</Badge>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</div>
					</TabsContent>

					<TabsContent value='providers' className='space-y-6'>
						<Card>
							<CardHeader>
								<CardTitle>Ustalar Boshqaruvi</CardTitle>
								<CardDescription>
									Xizmat ko'rsatuvchilar va ularning tasdiqlash holatini
									boshqaring
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Usta</TableHead>
											<TableHead>Xizmat</TableHead>
											<TableHead>Joylashuv</TableHead>
											<TableHead>Reyting</TableHead>
											<TableHead>Holat</TableHead>
											<TableHead>Amallar</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										<TableRow>
											<TableCell>
												<div className='flex items-center space-x-2'>
													<Avatar className='h-8 w-8'>
														<AvatarFallback>AK</AvatarFallback>
													</Avatar>
													<div>
														<p className='font-medium'>Ahmad Karimov</p>
														<p className='text-sm text-muted-foreground'>
															ahmad@example.com
														</p>
													</div>
												</div>
											</TableCell>
											<TableCell>Elektrik</TableCell>
											<TableCell>Toshkent</TableCell>
											<TableCell>4.9</TableCell>
											<TableCell>
												<Badge>Tasdiqlangan</Badge>
											</TableCell>
											<TableCell>
												<Button size='sm' variant='outline'>
													<Eye className='h-4 w-4' />
												</Button>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value='orders' className='space-y-6'>
						<Card>
							<CardHeader>
								<CardTitle>Buyurtmalar Boshqaruvi</CardTitle>
								<CardDescription>
									Xizmat buyurtmalarini kuzatish va boshqarish
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Buyurtma ID</TableHead>
											<TableHead>Mijoz</TableHead>
											<TableHead>Usta</TableHead>
											<TableHead>Xizmat</TableHead>
											<TableHead>Summa</TableHead>
											<TableHead>Holat</TableHead>
											<TableHead>Sana</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{recentOrders.map(order => (
											<TableRow key={order.id}>
												<TableCell>#{order.id}</TableCell>
												<TableCell>{order.client}</TableCell>
												<TableCell>{order.provider}</TableCell>
												<TableCell>{order.service}</TableCell>
												<TableCell>{order.amount}</TableCell>
												<TableCell>
													<Badge
														variant={
															order.status === 'completed'
																? 'default'
																: 'secondary'
														}
													>
														{order.status === 'completed'
															? 'Tugallangan'
															: 'Jarayonda'}
													</Badge>
												</TableCell>
												<TableCell>{order.date}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value='analytics' className='space-y-6'>
						<div className='grid lg:grid-cols-2 gap-6'>
							<Card>
								<CardHeader>
									<CardTitle>Mashhur Xizmatlar</CardTitle>
									<CardDescription>
										Bu oyda eng ko'p so'ralgan xizmatlar
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className='space-y-4'>
										{[
											{ service: 'Elektrik', orders: 234, growth: '+15%' },
											{ service: 'Santexnik', orders: 189, growth: '+8%' },
											{ service: 'Duradgorlik', orders: 156, growth: '+12%' },
											{ service: 'Rassomlik', orders: 134, growth: '+5%' },
										].map(item => (
											<div
												key={item.service}
												className='flex items-center justify-between'
											>
												<div>
													<p className='font-medium'>{item.service}</p>
													<p className='text-sm text-muted-foreground'>
														{item.orders} buyurtma
													</p>
												</div>
												<Badge variant='secondary'>{item.growth}</Badge>
											</div>
										))}
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Top Hududlar</CardTitle>
									<CardDescription>Eng faol shaharlar</CardDescription>
								</CardHeader>
								<CardContent>
									<div className='space-y-4'>
										{[
											{ city: 'Toshkent', providers: 456, orders: 1234 },
											{ city: 'Samarqand', providers: 234, orders: 567 },
											{ city: 'Buxoro', providers: 123, orders: 345 },
											{ city: 'Andijon', providers: 89, orders: 234 },
										].map(item => (
											<div
												key={item.city}
												className='flex items-center justify-between'
											>
												<div className='flex items-center space-x-2'>
													<MapPin className='h-4 w-4 text-muted-foreground' />
													<div>
														<p className='font-medium'>{item.city}</p>
														<p className='text-sm text-muted-foreground'>
															{item.providers} usta
														</p>
													</div>
												</div>
												<div className='text-right'>
													<p className='font-medium'>{item.orders}</p>
													<p className='text-sm text-muted-foreground'>
														buyurtma
													</p>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}
